import StyleDictionaryModule from 'style-dictionary';
import pkg from '../dist/src/index.js';
const { makeSdTamaguiConfig } = pkg;
import generator from 'style-dictionary';
import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from 'style-dictionary/enums';

const PREFIX = 'FLDS';

const createConfig = (mode, platform) => {
  console.log(`Creating config for mode: ${mode}, platform: ${platform}`);
  return {
    source: [`static/tokens.json`],
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
        buildPath: `styles/tamagui/${mode}/`,
        prefix: PREFIX,
        files: [
          {
            destination: 'tokens.js',
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

handler.registerTransformGroup({
  name: 'tokens-js',
  transforms: ['name/constant', /* 'name/kebab', */ 'size/px', 'color/hex'],
});

['Dark', 'Light', 'DIRE', 'FL'].map(async (mode) => {
  handler.registerFilter({
    name: `filter/${mode}`,
    filter: (token) => {
      if (token.$type === 'typography') return ['Desktop', 'Tablet', 'Mobile'].includes(mode);
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

['web'].map((platform) =>
  ['Dark', 'Light', 'DIRE', 'FL'].map(async (mode) => {
    console.log(`Building platform: ${platform} for mode: ${mode}`);
    let builder = await handler.extend(createConfig(mode, platform));

    builder.buildPlatform('web/js');
  })
);

const sdConfig = makeSdTamaguiConfig({
  source: [`static/tokens.json`],
  type: 'all',
  formatType: 'js',
  isVariables: true,
  prefix: PREFIX,
  extend: true,
  transforms: ['attribute/cti', 'name/kebab'],
  buildPath: `styles/tamagui/`,
});

const run = async () => {
  const StyleDictionary = new StyleDictionaryModule(sdConfig);

  await StyleDictionary.hasInitialized;
  await StyleDictionary.buildAllPlatforms();
};

run();
