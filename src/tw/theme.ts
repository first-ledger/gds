import StyleDictionary from 'style-dictionary';
import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from 'style-dictionary/enums';
import { TransformedToken } from 'style-dictionary/types';

// Define custom token interface to include additional properties
interface CustomToken extends TransformedToken {
  $value: any; // Can be string, number, or object
  $type?: string;
  submode?: string;
  $extensions?: {
    mode?: Record<string, any>;
  };
  key?: string;
  name: string;
}

// Define shadow value structure
interface ShadowValue {
  offsetX: string;
  offsetY: string;
  blur: string;
  spread: string;
  color: string;
}

// Define blur value structure
interface BlurValue {
  blur: string;
}

export interface Options {
  prefix: string;
  modes: string[];
  submodes: string[];
  typography_modes: string[];
  path: string;
  file: string;
}

const createConfig = (opts: Options & { mode: string }) => {
  const { file, mode, prefix: PREFIX, path } = opts;

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
            filter: ` mnóstwofilter/${mode}`,
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

export const build = async (opts: Options) => {
  const { file, prefix: PREFIX, path, modes, submodes, typography_modes } = opts;

  const handler = new StyleDictionary();

  // REGISTER CUSTOM FORMATS + TEMPLATES + TRANSFORMS + TRANSFORM GROUPS
  handler.registerFormat({
    name: 'json/flat',
    format: ({ dictionary }) => {
      return JSON.stringify(dictionary.allTokens, null, 2);
    },
  });

  function toNormalCase(str: string) {
    return str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
  }

  function formatTokenName(str: string, submode?: string) {
    let name = toNormalCase(str);
    let prefix = name.split('-')[0];
    let altered = name.replace(prefix, prefix.toUpperCase()).toLowerCase();

    if (submode) {
      altered = altered
        .split('-')
        .filter((i) => i !== submode.toLowerCase())
        .join('-');
    }

    return altered;
  }

  handler.registerFormat({
    name: 'scss/selector',
    format: ({ dictionary, options }) => {
      let typography = '';
      const allTokens = dictionary.allTokens as CustomToken[];
      let tokens = allTokens
        .map((prop: CustomToken) => {
          if (typeof prop.$value === 'object' && prop.$type === 'typography') {
            typography += `.${formatTokenName(prop.name, prop.submode)} {
                  ${Object.entries(prop.$value)
                    .map(([key, value]) => {
                      let k = key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
                      let v = value;
                      if (k !== 'font-family') v = String(v).toLowerCase();
                      if (k === 'paragraph-spacing') return '';
                      if (k === 'paragraph-indent') k = 'text-indent';
                      if (k === 'text-case') k = 'text-transform';
                      if (v === 'original') v = 'none';
                      if (v === 'strikethrough') v = 'line-through';
                      return `${k}: ${v};\n`;
                    })
                    .join(' ')}}; \n`;
            return '';
          }
          if (typeof prop.$value === 'object' && prop.$type === 'shadow') {
            let composite = (prop.$value as ShadowValue[])
              .map((v) => `${v.offsetX} ${v.offsetY} ${v.blur} ${v.spread} ${v.color}`)
              .join(',');
            return `$${formatTokenName(prop.name, prop.submode)}: ${composite}; \n`;
          }
          if (typeof prop.$value === 'object' && prop.$type === 'blur') {
            return `$${formatTokenName(prop.name, prop.submode)}: ${(prop.$value as BlurValue).blur}; \n`;
          }

          return `$${formatTokenName(prop.name, prop.submode)}: ${prop.$value}; \n`;
        })
        .join(' ');

      let t = typography !== '' ? `\n${typography}` : typography;

      const selector = options?.selector ?? ':root';
      return `.${selector} {\n${tokens}\n${tokens.replaceAll('$', '--')}\n${t}}`;
    },
  });

  handler.registerFormat({
    name: 'css/selector',
    format: ({ dictionary, options }) => {
      let typography = '';
      let subthemes: { [k: string]: string | undefined } = Object.fromEntries(
        submodes.map((mode) => [mode, undefined])
      );
      const allTokens = dictionary.allTokens as CustomToken[];
      let tokens = allTokens
        .map((prop: CustomToken) => {
          if (typeof prop.$value === 'object' && prop.$type === 'typography') {
            typography += `.${formatTokenName(prop.name)} {
                  ${Object.entries(prop.$value)
                    .map(([key, value]) => {
                      let k = key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
                      let v = value;
                      if (k !== 'font-family') v = String(v).toLowerCase();
                      if (k === 'paragraph-spacing') return '';
                      if (k === 'paragraph-indent') k = 'text-indent';
                      if (k === 'text-case') k = 'text-transform';
                      if (v === 'original') v = 'none';
                      if (v === 'strikethrough') v = 'line-through';
                      return `${k}: ${v};\n`;
                    })
                    .join(' ')}}; \n`;
            return '';
          }
          if (typeof prop.$value === 'object' && prop.$type === 'shadow') {
            let composite = (prop.$value as ShadowValue[])
              .map((v) => `${v.offsetX} ${v.offsetY} ${v.blur} ${v.spread} ${v.color}`)
              .join(',');
            return `$${formatTokenName(prop.name)}: ${composite}; \n`;
          }
          if (typeof prop.$value === 'object' && prop.$type === 'blur') {
            return `$${formatTokenName(prop.name)}: ${(prop.$value as BlurValue).blur}; \n`;
          }

          if (prop.submode) {
            if (!subthemes[prop.submode]) subthemes[prop.submode] = '';
            subthemes[prop.submode]! +=
              `$${formatTokenName(prop.name, prop.submode)}:${prop.$value}; \n`;
            return '';
          }

          const isNeg = prop.key?.includes('(-)');
          return `$${formatTokenName(prop.name)}${isNeg ? '-neg' : ''} : ${prop.$value}; \n`;
        })
        .join(' ');

      let t = typography;
      const selector = options?.selector ?? 'unknown';

      return `
      @layer base {
        [data-theme='${selector}'] {
          ${tokens.replaceAll('$', '--')}
          ${t}
          ${Object.entries(subthemes)
            .map(([subtheme, values]) => {
              if (values) {
                return `
                  [data-variant='${subtheme}'] {
                    ${values.replaceAll('$', '--')}
                  }
                `;
              }
              return '';
            })
            .join('')}
        }
      }`;
    },
  });

  handler.registerTransform({
    name: 'transform/weight',
    type: 'value',
    transform: (token: TransformedToken) => {
      if (token.scopes && token.scopes.includes('FONT_WEIGHT')) {
        return token.$value.replace('px', '');
      }
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
    transforms: ['name/kebab', 'time/seconds', 'size/px', 'color/css', 'transform/weight'],
  });

  handler.registerTransformGroup({
    name: 'tokens-css',
    transforms: ['name/kebab', 'time/seconds', 'size/px', 'color/css', 'transform/weight'],
  });

  const filterMode = (token: CustomToken, mode: string) => {
    if (token.$type === 'typography') return typography_modes.includes(mode);
    if (!token.$extensions?.mode) return mode === 'Globals';
    let array = Object.keys(token.$extensions.mode);

    if (array.length === 0 && mode === 'Globals') return true;

    if (mode !== 'Globals' && array.some((m) => submodes.includes(m))) return true;

    return array.includes(mode);
  };

  modes.forEach((mode) => {
    handler.registerFilter({
      name: `filter/${mode}`,
      filter: (token: TransformedToken) =>
        filterMode(token as CustomToken, mode) && token.$type !== 'typography',
    });

    handler.registerFilter({
      name: `filter/${mode}/typography`,
      filter: (token: TransformedToken) =>
        filterMode(token as CustomToken, mode) &&
        token.$type === 'typography' &&
        typography_modes.includes(mode),
    });

    handler.registerPreprocessor({
      name: `preprocess/${mode}`,
      preprocessor: (dictionary) => {
        const processToken = (token: CustomToken, tokenPath: string[]) => {
          if (!token.$extensions?.mode) return token;

          const modeKeys = Object.keys(token.$extensions.mode);
          if (modeKeys.some((m) => submodes.includes(m))) {
            const submodeTokens = submodes
              .filter((submode) => token.$extensions!.mode?.[submode])
              .reduce(
                (acc, submode) => {
                  const subToken = {
                    ...token,
                    name: `${token.name}-${submode.toLowerCase()}`,
                    $value: token.$extensions!.mode?.[submode],
                    submode,
                    originalName: token.name,
                  };
                  const subKey = `${submode.toLowerCase()}-${tokenPath.slice(1).join('-')}`;
                  return { ...acc, [subKey]: subToken };
                },
                {} as Record<string, CustomToken>
              );
            return submodeTokens;
          }

          if (token.$extensions.mode[mode]) {
            return { ...token, $value: token.$extensions.mode[mode] };
          }

          return token;
        };

        const processDictionary = (obj: any, path: string[] = []) => {
          if (typeof obj !== 'object' || obj === null) {
            return obj;
          }

          const result: Record<string, any> = {};
          Object.entries(obj).forEach(([key, v]) => {
            const currentPath = [...path, key];

            let value = v as CustomToken;

            if (value.$value !== undefined) {
              const processed = processToken(value as CustomToken, currentPath);
              if (
                typeof processed === 'object' &&
                !Array.isArray(processed) &&
                processed.$value === undefined
              ) {
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

  await Promise.all(
    modes.map(async (mode) => {
      const config = createConfig({ ...opts, mode });
      const builder = await handler.extend(config);
      await builder.buildPlatform('web/css');
    })
  );
};
