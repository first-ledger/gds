import StyleDictionaryModule from 'style-dictionary';
import pkg from '../../dist/src/index.js';
const { makeSdTamaguiConfig, makeSdTamaguiTheme } = pkg;
import generator from 'style-dictionary';
import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from 'style-dictionary/enums';

const PREFIX = 'WDS';
const modes = ['Globals', 'Dark', 'Light', 'Desktop', 'Tablet', 'Mobile', 'Default'];
const typography_modes = ['Desktop', 'Tablet', 'Mobile'];
const platforms = ['web'];

const path = 'styles/wds';
const file = 'static/wallet.json';

const createConfig = (mode, platform) => {
  return {
    source: [file],
    preprocessors: [`preprocess/${mode}`],
    log: {
      warnings: logWarningLevels.disabled, // 'warn' | 'error' | 'disabled'
      verbosity: logVerbosityLevels.verbose, // 'default' | 'silent' | 'verbose'
      errors: {
        brokenReferences: logBrokenReferenceLevels.console, // 'throw' | 'console'
      },
    },
    platforms: {
      'web/js': {
        transformGroup: 'tokens-js',
        buildPath: `${path}/tamagui/assets/${mode}/`,
        prefix: PREFIX,
        files: [
          {
            destination: 'tokens.ts',
            format: 'javascript/es6',
            filter: `filter/${mode}`,
          },
        ],
      },
    },
  };
};

const handler = new generator();

function toNormalCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
}

function formatTokenName(str) {
  let name = toNormalCase(str);
  let prefix = name.split('-')[0];
  let altered = name.replace(prefix, prefix.toUpperCase());
  return altered;
}

handler.registerTransform({
  name: 'transform/weight',
  type: 'value',
  transform: (token) => {
    if (token.scopes && token.scopes.includes('FONT_WEIGHT')) return token.$value.replace('px', '');
    return token.$value;
  },
});

handler.registerTransform({
  name: 'transform/keys',
  type: 'value',

  transform: (token) => {
    if (token.scopes && token.scopes.includes('FONT_WEIGHT')) return token.$value.replace('px', '');
    return token.$value;
  },
});

handler.registerTransformGroup({
  name: 'tokens-js',
  transforms: ['name/constant', 'size/px', 'color/hex', 'transform/keys'],
});

modes.map(async (mode) => {
  handler.registerFilter({
    name: `filter/${mode}`,
    filter: (token) => {
      if (token.$type === 'typography') return typography_modes.includes(mode);
      if (!token.$extensions?.mode) return mode === 'Globals';
      // if (token.name.includes('background-primary')) console.log(token);
      let array = Object.keys(token.$extensions?.mode);
      if (array.length === 0 && mode === 'Globals') return true;
      return array.includes(mode);
    },
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

    builder.buildPlatform('web/js');
  })
);

const sdConfig = makeSdTamaguiConfig({
  source: [file],
  type: 'all',
  formatType: 'js',
  isVariables: true,
  prefix: PREFIX,
  extend: true,
  transforms: ['attribute/cti', 'name/kebab'],
  buildPath: `${path}/tamagui/`,
  fileName: 'tamagui.config.ts',
});

const sdTheme = makeSdTamaguiTheme({
  source: [file],
  type: 'all',
  formatType: 'js',
  isVariables: true,
  prefix: PREFIX,
  extend: true,
  transforms: ['attribute/cti', 'name/kebab'],
  buildPath: `${path}/tamagui/`,
  fileName: 'themes.ts',
});

const run = async () => {
  const TamaguiConf = new StyleDictionaryModule(sdConfig);
  const TamaguiTheme = new StyleDictionaryModule(sdTheme);

  await TamaguiConf.hasInitialized;
  await TamaguiConf.buildAllPlatforms();
  await TamaguiTheme.hasInitialized;
  await TamaguiTheme.buildAllPlatforms();
};

run();
