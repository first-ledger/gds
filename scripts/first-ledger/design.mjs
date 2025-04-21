import generator from 'style-dictionary';
import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from 'style-dictionary/enums';

const PREFIX = 'FLDS';
const modes = ['Globals', 'Dark', 'Light', 'Desktop', 'Tablet', 'Mobile', 'Default', 'DIRE', 'FL'];
const typography_modes = ['Desktop', 'Tablet', 'Mobile'];
const platforms = ['web', 'ios', 'android'];

const path = 'styles/flds';
const file = 'static/first-ledger.json';

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
      'web/scss': {
        transformGroup: `tokens-scss`,
        buildPath: `${path}/web/${mode}/`,
        prefix: PREFIX,
        files: [
          {
            selector: `${mode}`, // defaults to :root; set to false to disable
            destination: 'tokens.scss',
            format: 'scss/selector',
            filter: `filter/${mode}`,
          },
          {
            selector: `${mode}`, // defaults to :root; set to false to disable
            destination: 'typography.scss',
            format: 'scss/selector',
            filter: `filter/${mode}/typography`,
          },
        ],
      },
      'web/css': {
        transformGroup: `tokens-css`,
        buildPath: `${path}/web/${mode}/`,
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
      styleguide: {
        transformGroup: 'styleguide',
        buildPath: `${path}/styleguide/`,
        prefix: PREFIX,
        files: [
          {
            destination: `${platform}_${mode}_tokens.json`,
            format: 'json/flat',
            filter: `filter/${mode}`,
          },
        ],
      },
      ios: {
        transformGroup: 'ios',
        buildPath: `${path}/ios/${mode}/`,
        prefix: PREFIX,
        files: [
          {
            destination: 'tokens-all.plist',
            format: 'ios/plist',
          },
          {
            destination: 'tokens-colors.plist',
            format: 'ios/plist',
            filter: (token) => token.$type === 'color',
          },
        ],
      },
      android: {
        transformGroup: 'android',
        buildPath: `${path}/android/${mode}/`,
        prefix: PREFIX,
        files: [
          {
            destination: 'tokens-all.xml',
            format: 'android/resources',
            // template: 'android/xml',
          },
          {
            destination: 'tokens-colors.xml',
            format: 'android/colors',
            // template: 'android/xml',
            filter: (token) => token.$type === 'color',
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

function formatTokenName(str) {
  let name = toNormalCase(str);
  let prefix = name.split('-')[0];
  let altered = name.replace(prefix, prefix.toUpperCase()).toLowerCase();
  return altered;
}

handler.registerFormat({
  name: 'scss/selector',
  format: function (dictionary) {
    let typography = '';
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

        return `$${formatTokenName(prop.name)}: ${prop.$value}; \n`;
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

        return `$${formatTokenName(prop.name)}: ${prop.$value}; \n`;
      })
      .join(' ');

    let t = typography;

    //@ts-ignore
    return `.${this.selector} {
        ${tokens.replaceAll('$', '--')}
        ${t}}`;
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
  // if (token.name.includes('background-primary')) console.log(token);
  let array = Object.keys(token.$extensions?.mode);
  if (array.length === 0 && mode === 'Globals') return true;
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
    preprocessor: (dict) => {
      // console.log(dict);
      // recursively traverse token objects and delete description props
      function updateValue(slice) {
        if (slice.$value) slice.$value = slice.$extensions?.mode?.[mode] ?? slice.$value;
        Object.values(slice).forEach((value) => {
          if (typeof value === 'object') {
            updateValue(value);
          }
        });
        return slice;
      }
      return updateValue(dict);
    },
  });
});

platforms.map((platform) =>
  modes.map(async (mode) => {
    let builder = await handler.extend(createConfig(mode, platform));

    if (platform === 'web') {
      builder.buildPlatform('web/js');
      builder.buildPlatform('web/json');
      builder.buildPlatform('web/scss');
      builder.buildPlatform('web/css');
    } else if (platform === 'ios') {
      builder.buildPlatform('ios');
    } else if (platform === 'android') {
      builder.buildPlatform('android');
    }
    builder.buildPlatform('styleguide');
  })
);
