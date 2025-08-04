import StyleDictionary, { TransformedToken } from 'style-dictionary';
import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from 'style-dictionary/enums';

type MODE = string;
type SUBMODE = string;
type PLATFORM = 'web' | 'ios' | 'android';

type MODES = MODE[];
type SUBMODES = SUBMODE[];
type PLATFORMS = PLATFORM[];

export interface Opts {
  prefix?: string;
  outputDir: string;
  file: string;
  themes: MODES;
  variants: SUBMODES;
  typography: string[];
  platforms: PLATFORMS;
}

// Interface for token structure
interface Token extends TransformedToken {
  $type?: string;
  $value: string | object | number;
  name: string;
  submode?: SUBMODE;
  originalName?: string;
  $extensions?: {
    mode?: Record<MODE | SUBMODE, string | object>;
  };
  scopes?: string[];
}

// Interface for Style Dictionary file configuration
interface FileConfig {
  destination: string;
  format: string;
  filter?: string | ((token: Token) => boolean);
  selector?: string | false;
}

// Interface for Style Dictionary platform configuration
interface PlatformConfig {
  transformGroup: string;
  buildPath: string;
  prefix: string;
  files: FileConfig[];
}

// Interface for Style Dictionary configuration
interface Config {
  source: string[];
  preprocessors: string[];
  log: {
    warnings: keyof typeof logWarningLevels;
    verbosity: keyof typeof logVerbosityLevels;
    errors: {
      brokenReferences: keyof typeof logBrokenReferenceLevels;
    };
  };
  platforms: Record<string, PlatformConfig>;
}

export const makeSdConfig = (opts: Opts) => {
  const {
    file: FILE,
    outputDir: PATH,
    prefix: PREFIX = '',
    themes: MODES,
    variants: SUBMODES,
    platforms: PLATFORMS,
    typography: TYPOGRAPHY_MODES,
  } = opts;

  // Create configuration for a given mode and platform
  const createConfig = (mode: MODE, platform: PLATFORM): Config => ({
    source: [FILE],
    preprocessors: [`preprocess/${mode}`],
    log: {
      warnings: logWarningLevels.disabled,
      verbosity: logVerbosityLevels.silent,
      errors: {
        brokenReferences: logBrokenReferenceLevels.console,
      },
    },
    platforms: {
      'web/js': {
        transformGroup: 'tokens-js',
        buildPath: `${PATH}/web/${mode}/`,
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
        buildPath: `${PATH}/web/${mode}/`,
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
        buildPath: `${PATH}/web/${mode}/`,
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
        buildPath: `${PATH}/web/${mode}/`,
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
        buildPath: `${PATH}/styleguide/`,
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
        buildPath: `${PATH}/ios/${mode}/`,
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
        buildPath: `${PATH}/android/${mode}/`,
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
  });

  const generate = (handler: StyleDictionary) => {
    // Register custom format: json/flat
    handler.registerFormat({
      name: 'json/flat',
      format: ({ dictionary }) => JSON.stringify(dictionary.allTokens, null, 2),
    });

    // Utility function to convert string to NormalCase
    const toNormalCase = (str: string): string =>
      str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());

    // Format token names for CSS/SCSS
    const formatTokenName = (str: string, submode?: SUBMODE): string => {
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
    };

    // Register custom format: scss/selector
    handler.registerFormat({
      name: 'scss/selector',
      format: ({ dictionary, options }) => {
        let typography = '';
        let tokens = dictionary.allTokens
          .map((prop: TransformedToken) => {
            if (typeof prop.$value === 'object' && prop.$type === 'typography') {
              typography += `.${formatTokenName(prop.name, prop.submode)} {
            ${Object.entries(prop.$value)
              .map(([key, value]) => {
                let k = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
                let v = value;
                if (k !== 'font-family') v = String(v).toLowerCase();
                if (k === 'paragraph-spacing') return '';
                if (k === 'paragraph-indent') k = 'text-indent';
                if (k === 'text-case') k = 'text-transform';
                if (v === 'original') v = 'none';
                if (v === 'strikethrough') v = 'line-through';
                return `${k}: ${v};`;
              })
              .filter(Boolean)
              .join('\n')}
          }\n`;
              return '';
            }
            if (typeof prop.$value === 'object' && prop.$type === 'shadow') {
              const composite = (prop.$value as any[])
                .map((v) => `${v.offsetX} ${v.offsetY} ${v.blur} ${v.spread} ${v.color}`)
                .join(',');
              return `$${formatTokenName(prop.name, prop.submode)}: ${composite};`;
            }
            if (typeof prop.$value === 'object' && prop.$type === 'blur') {
              return `$${formatTokenName(prop.name, prop.submode)}: ${(prop.$value as any).blur};`;
            }
            return `$${formatTokenName(prop.name, prop.submode)}: ${prop.$value};`;
          })
          .filter(Boolean)
          .join('\n');

        const t = typography ? `\n${typography}` : '';
        return `.${options.selector || 'root'} {\n${tokens}\n${tokens.replaceAll('$', '--')}\n${t}}`;
      },
    });

    // Register custom format: css/selector (with sub-theme support for Tailwind v4)
    handler.registerFormat({
      name: 'css/selector',
      format: ({ dictionary, options }) => {
        let typography = '';
        const subthemes: Record<SUBMODE, string> = Object.fromEntries(
          SUBMODES.map((mode) => [mode, ''])
        );

        const tokens = dictionary.allTokens
          .map((prop: TransformedToken) => {
            if (prop.$type === 'typography') {
              typography += `.${formatTokenName(prop.name)} {
            ${Object.entries(prop.$value)
              .map(([key, value]) => {
                let k = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
                let v = value;
                if (k !== 'font-family') v = String(v).toLowerCase();
                if (k === 'paragraph-spacing') return '';
                if (k === 'paragraph-indent') k = 'text-indent';
                if (k === 'text-case') k = 'text-transform';
                if (v === 'original') v = 'none';
                if (v === 'strikethrough') v = 'line-through';
                return `${k}: ${v};`;
              })
              .filter(Boolean)
              .join('\n')}
          }\n`;
              return '';
            }
            if (typeof prop.$value === 'object' && prop.$type === 'shadow') {
              const composite = (prop.$value as any[])
                .map((v) => `${v.offsetX} ${v.offsetY} ${v.blur} ${v.spread} ${v.color}`)
                .join(',');
              return `$${formatTokenName(prop.name)}: ${composite};`;
            }
            if (typeof prop.$value === 'object' && prop.$type === 'blur') {
              return `$${formatTokenName(prop.name)}: ${(prop.$value as any).blur};`;
            }

            if (prop.submode) {
              subthemes[prop.submode] += `$${formatTokenName(
                prop.name,
                prop.submode
              )}: ${prop.$value}; \n`;
              return '';
            }

            return `$${formatTokenName(prop.name)}: ${prop.$value};`;
          })
          .filter(Boolean)
          .join('\n');

        const subthemeStyles = Object.entries(subthemes)
          .map(([subtheme, values]) =>
            values
              ? `
            .${subtheme.toLowerCase()} {
              ${values.replaceAll('$', '--')}
            }`
              : ''
          )
          .filter(Boolean)
          .join('\n');

        return `
      .${options.selector} {
          ${tokens.replaceAll('$', '--')}
          ${typography}
          ${subthemeStyles}
        }
      }`;
      },
    });

    // Register custom transform: weight
    handler.registerTransform({
      name: 'transform/weight',
      type: 'value',
      transform: (token: TransformedToken) => {
        if (token.scopes?.includes('FONT_WEIGHT')) {
          return String(token.$value).replace('px', '');
        }
        return token.$value;
      },
    });

    // Register transform groups
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

    // Register filters
    const filterMode = (token: TransformedToken, mode: MODE): boolean => {
      if (token.$type === 'typography') return TYPOGRAPHY_MODES.includes(mode);
      if (!token.$extensions?.mode) return mode === 'Globals';
      const modeKeys = Object.keys(token.$extensions.mode || {});
      if (modeKeys.length === 0 && mode === 'Globals') return true;
      if (mode !== 'Globals' && modeKeys.some((m) => SUBMODES.includes(m as SUBMODE))) return true;
      return modeKeys.includes(mode);
    };

    MODES.forEach((mode) => {
      handler.registerFilter({
        name: `filter/${mode}`,
        filter: (token: TransformedToken) =>
          filterMode(token, mode) && token.$type !== 'typography',
      });

      handler.registerFilter({
        name: `filter/${mode}/typography`,
        filter: (token: TransformedToken) =>
          filterMode(token, mode) &&
          token.$type === 'typography' &&
          TYPOGRAPHY_MODES.includes(mode),
      });

      // Register preprocessor for mode
      handler.registerPreprocessor({
        name: `preprocess/${mode}`,
        preprocessor: (dictionary) => {
          console.log(dictionary);

          const processToken = (
            token: Token,
            tokenPath: string[]
          ): Token | Record<string, Token> => {
            if (!token.$extensions?.mode) return token;

            const modeKeys = Object.keys(token.$extensions.mode || {});
            if (modeKeys.some((m) => SUBMODES.includes(m as SUBMODE))) {
              return SUBMODES.filter((submode) => token.$extensions!.mode![submode]).reduce(
                (acc, submode) => {
                  const subToken: Token = {
                    ...token,
                    name: `${token.name}-${submode.toLowerCase()}`,
                    $value: token.$extensions!.mode![submode],
                    submode,
                    originalName: token.name,
                  };
                  const subKey = `${submode.toLowerCase()}-${tokenPath.slice(1).join('-')}`;
                  return { ...acc, [subKey]: subToken };
                },
                {} as Record<string, Token>
              );
            }

            if (token.$extensions.mode[mode]) {
              return { ...token, $value: token.$extensions.mode[mode] };
            }

            return token;
          };

          const processDictionary = (obj: any, path: string[] = []): any => {
            if (typeof obj !== 'object' || obj === null) return obj;

            const result: any = {};
            Object.entries(obj).forEach(([key, value]) => {
              const currentPath = [...path, key];

              if ((value as Token).$value !== undefined) {
                const processed = processToken(value as Token, currentPath);
                if (
                  typeof processed === 'object' &&
                  !Array.isArray(processed) &&
                  (processed as Token).$value === undefined
                ) {
                  Object.assign(result, processed);
                } else {
                  result[key] = processed;
                }
              } else {
                result[key] = processDictionary(value, currentPath);
              }
            });

            return result;
          };

          return processDictionary(dictionary);
        },
      });
    });

    return handler;
  };

  // Build tokens for each platform and mode
  const build = async () => {
    return PLATFORMS.forEach((platform: PLATFORM) =>
      MODES.forEach(async (mode: MODE) => {
        const config = createConfig(mode, platform);

        // Initialize Style Dictionary
        const handler = new StyleDictionary();
        await handler.hasInitialized;

        const builder = await generate(handler).extend(config);

        if (platform === 'web') {
          await Promise.all([
            builder.buildPlatform('web/js'),
            builder.buildPlatform('web/json'),
            builder.buildPlatform('web/scss'),
            builder.buildPlatform('web/css'),
          ]);
        } else if (platform === 'ios') {
          await builder.buildPlatform('ios');
        } else if (platform === 'android') {
          await builder.buildPlatform('android');
        }
        await builder.buildPlatform('styleguide');
      })
    );
  };

  return { createConfig, build };
};
