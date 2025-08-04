import generator from 'style-dictionary';
import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from 'style-dictionary/enums';

const PREFIX = 'WDS';
const modes = ['Globals', 'Dark', 'Light'];
const submodes = ['Default', 'Accent', 'Red', 'Green'];
const typography_modes = [];
const platforms = ['web', 'ios', 'android'];

const path = 'styles/wds/tailwind';
const file = 'static/wallet.json';

const createConfig = (mode, platform) => {
  return {
    source: [file],
    preprocessors: [`preprocess/${mode}`],
    log: {
      warnings: logWarningLevels.disabled, // 'warn' | 'error' | 'disabled'
      verbosity: logVerbosityLevels.silent, // 'default' | 'silent' | 'verbose'
      errors: {
        brokenReferences: logBrokenReferenceLevels.console, // 'throw' | 'console'
      },
    },
    platforms: {
      'web/js': {
        transformGroup: 'tokens-js',
        buildPath: `${path}/web/${mode}/`,
        prefix: PREFIX,
        files: [
          {
            destination: 'tokens.es6.js',
            format: 'javascript/es6',
            filter: `filter/${mode}`,
          },
          {
            destination: 'typography.es6.js',
            format: 'javascript/es6',
            filter: `filter/${mode}/typography`,
          },
        ],
      },
      'web/json': {
        transformGroup: 'tokens-json',
        buildPath: `${path}/web/${mode}/`,
        prefix: PREFIX,
        files: [
          {
            destination: 'tokens.json',
            format: 'json/flat',
            filter: `filter/${mode}`,
          },
          {
            destination: 'typography.json',
            format: 'json/flat',
            filter: `filter/${mode}/typography`,
          },
        ],
      },
      'web/css': {
        transformGroup: `tokens-css`,
        buildPath: `${path}/${mode}/`,
        prefix: PREFIX,
        files: [
          {
            selector: `${mode}`, // defaults to :root; set to false to disable
            destination: 'tokens.css',
            format: 'css/selector',
            filter: `filter/${mode}`,
          },
          {
            selector: `${mode}`, // defaults to :root; set to false to disable
            destination: 'typography.css',
            format: 'css/selector',
            filter: `filter/${mode}/typography`,
          },
        ],
      },
    },
  };
};

const handler = new generator();

// REGISTER CUSTOM FORMATS + TEMPLATES + TRANSFORMS + TRANSFORM GROUPS

// if you want to see the available pre-defined formats, transforms and transform groups uncomment this
//console.log(handler);

handler.registerFormat({
  name: 'json/flat',
  format: function (dictionary) {
    return JSON.stringify(dictionary.dictionary.allTokens, null, 2);
  },
});

function toNormalCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
}

function formatTokenName(str, submode) {
  let name = toNormalCase(str);
  let prefix = name.split('-')[0];
  let altered = name.replace(prefix, prefix.toUpperCase()).toLowerCase();

  if (submode)
    altered = altered
      .split('-')
      .filter((i) => i !== submode.toLowerCase())
      .join('-');

  return altered;
}

handler.registerFormat({
  name: 'scss/selector',
  format: function (dictionary) {
    let typography = '';
    let tokens = dictionary.dictionary.allTokens
      .map((prop) => {
        if (typeof prop.$value === 'object' && prop.$type === 'typography') {
          typography += `.${formatTokenName(prop.name, prop.submode)} {
                  ${Object.entries(prop.$value)
                    .map(([key, value], i, a) => {
                      let k = key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
                      let v = value;
                      if (k !== 'font-family') v = String(v).toLowerCase();
                      if (k === 'paragraph-spacing') return;
                      if (k === 'paragraph-indent') k = 'text-indent';
                      if (k === 'text-case') k = 'text-transform';
                      if (v === 'original') v = 'none';
                      if (v === 'strikethrough') v = 'line-through';
                      return `${k}: ${v};\n`;
                    })
                    .join(' ')}}; \n`;
          return;
        }
        if (typeof prop.$value === 'object' && prop.$type === 'shadow') {
          let composite = prop.$value
            .map((v) => `${v.offsetX} ${v.offsetY} ${v.blur} ${v.spread} ${v.color}`)
            .join(',');
          return `$${formatTokenName(prop.name, prop.submode)}: ${composite}; \n`;
        }
        if (typeof prop.$value === 'object' && prop.$type === 'blur') {
          return `$${formatTokenName(prop.name, prop.submode)}: ${prop.$value.blur}; \n`;
        }

        return `$${formatTokenName(prop.name, prop.submode)}: ${prop.$value}; \n`;
      })
      .join(' ');

    let t =
      typography !== ''
        ? `
      ${typography}`
        : typography;

    //@ts-ignore
    return `.${this.selector} {
        ${tokens}
        ${tokens.replaceAll('$', '--')}
        ${t}}`;
  },
});

handler.registerFormat({
  name: 'css/selector',
  format: function (dictionary) {
    let typography = '';
    let subthemes = Object.fromEntries(submodes.map((mode) => [mode, undefined]));
    let tokens = dictionary.dictionary.allTokens
      .map((prop) => {
        if (typeof prop.$value === 'object' && prop.$type === 'typography') {
          typography += `.${formatTokenName(prop.name)} {
                  ${Object.entries(prop.$value)
                    .map(([key, value], i, a) => {
                      let k = key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
                      let v = value;
                      if (k !== 'font-family') v = String(v).toLowerCase();
                      if (k === 'paragraph-spacing') return;
                      if (k === 'paragraph-indent') k = 'text-indent';
                      if (k === 'text-case') k = 'text-transform';
                      if (v === 'original') v = 'none';
                      if (v === 'strikethrough') v = 'line-through';
                      return `${k}: ${v};\n`;
                    })
                    .join(' ')}}; \n`;
          return;
        }
        if (typeof prop.$value === 'object' && prop.$type === 'shadow') {
          let composite = prop.$value
            .map((v) => `${v.offsetX} ${v.offsetY} ${v.blur} ${v.spread} ${v.color}`)
            .join(',');
          return `$${formatTokenName(prop.name)}: ${composite}; \n`;
        }
        if (typeof prop.$value === 'object' && prop.$type === 'blur') {
          return `$${formatTokenName(prop.name)}: ${prop.$value.blur}; \n`;
        }

        if (prop.submode) {
          if (!subthemes[prop.submode]) subthemes[prop.submode] = '';
          subthemes[prop.submode] +=
            `$${formatTokenName(prop.name, prop.submode)}:${prop.$value}; \n`;
          return undefined;
        }

        const isNeg = prop.key.includes('(-)');

        return `$${formatTokenName(prop.name)}${isNeg ? '-neg' : ''} : ${prop.$value}; \n`;
      })
      .join(' ');

    let t = typography;

    //@ts-ignore
    return `
      @layer base {
        [data-theme='${this.selector}'] {
          ${tokens.replaceAll('$', '--')}

          ${t}

          ${Object.entries(subthemes)
            .map(([subtheme, values]) => {
              if (values)
                return `
                  [data-variant='${subtheme}'] {
                    ${values.replaceAll('$', '--')}
                  }
                `;
            })
            .join('')}
        }
      }`;
  },
});

handler.registerTransform({
  name: 'transform/weight',
  type: 'value',
  transform: (token) => {
    if (token.scopes && token.scopes.includes('FONT_WEIGHT')) return token.$value.replace('px', '');
    return token.$value;
  },
});

handler.registerTransformGroup({
  name: 'styleguide',
  transforms: ['attribute/cti', 'name/kebab', 'size/px', 'color/css'],
});

handler.registerTransformGroup({
  name: 'tokens-js',
  transforms: ['name/constant', 'size/px', 'color/hex'],
});

handler.registerTransformGroup({
  name: 'tokens-json',
  transforms: ['attribute/cti', 'name/kebab', 'size/px', 'color/css', 'transform/weight'],
});

handler.registerTransformGroup({
  name: 'tokens-scss',
  // to see the pre-defined "scss" transformation use: console.log(handler.transformGroup['scss']);
  transforms: [
    'name/kebab',
    // 'name/camel',
    'time/seconds',
    'size/px',
    'color/css',
    'transform/weight' /* 'color/rgba-commas' */,
  ],
});

handler.registerTransformGroup({
  name: `tokens-css`,
  // to see the pre-defined "scss" transformation use: console.log(handler.transformGroup['scss']);
  transforms: [
    'name/kebab',
    // 'name/camel',
    'time/seconds',
    'size/px',
    'color/css',
    'transform/weight',
  ],
});

const filterMode = (token, mode) => {
  if (token.$type === 'typography') return typography_modes.includes(mode);
  if (!token.$extensions?.mode) return mode === 'Globals';
  let array = Object.keys(token.$extensions?.mode);

  if (array.length === 0 && mode === 'Globals') return true;

  if (mode !== 'Globals' && array.map((m) => submodes.includes(m)).includes(true)) return true;

  return array.includes(mode);
};

modes.map(async (mode) => {
  handler.registerFilter({
    name: `filter/${mode}`,
    filter: (token) => filterMode(token, mode) && token.$type !== 'typography',
  });

  handler.registerFilter({
    name: `filter/${mode}/typography`,
    filter: (token) =>
      filterMode(token, mode) && token.$type === 'typography' && typography_modes.includes(mode),
  });

  handler.registerPreprocessor({
    name: `preprocess/${mode}`,
    preprocessor: (dictionary) => {
      const processToken = (token, tokenPath) => {
        if (!token.$extensions?.mode) return token;

        const modeKeys = Object.keys(token.$extensions.mode);
        if (modeKeys.some((m) => submodes.includes(m))) {
          const submodeTokens = submodes
            .filter((submode) => token.$extensions.mode[submode])
            .reduce((acc, submode) => {
              const subToken = {
                ...token,
                name: `${token.name}-${submode.toLowerCase()}`,
                $value: token.$extensions.mode[submode],
                submode,
                originalName: token.name,
              };
              // Use a unique key based on the token path and submode
              const subKey = `${submode.toLowerCase()}-${tokenPath.slice(1).join('-')}`;
              return { ...acc, [subKey]: subToken };
            }, {});
          return submodeTokens; // Return dictionary of submode tokens
        }

        if (token.$extensions.mode[mode]) {
          return { ...token, $value: token.$extensions.mode[mode] };
        }

        return token;
      };

      const processDictionary = (obj, path = []) => {
        if (typeof obj !== 'object' || obj === null) {
          return obj;
        }

        const result = {};
        Object.entries(obj).forEach(([key, value]) => {
          const currentPath = [...path, key];

          if (value.$value !== undefined) {
            const processed = processToken(value, currentPath);
            if (
              typeof processed === 'object' &&
              !Array.isArray(processed) &&
              processed.$value === undefined
            ) {
              // Merge submode tokens into the result
              Object.entries(processed).forEach(([subKey, subToken]) => {
                result[subKey] = subToken;
              });
            } else {
              result[key] = processed;
            }
          } else {
            result[key] = processDictionary(value, currentPath);
          }
        });

        return result;
      };

      const processedDict = processDictionary(dictionary);
      return processedDict;
    },
  });
});

platforms.map((platform) =>
  modes.map(async (mode) => {
    const config = createConfig(mode, platform);
    const builder = await handler.extend(config);
    builder.buildPlatform('web/css');
  })
);
