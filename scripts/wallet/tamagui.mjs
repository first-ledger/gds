import StyleDictionaryModule from 'style-dictionary';
import pkg from '../../dist/src/index.js';
const { getTamaguiConfigFormat, getTamaguiThemeFormat, makeSdTamagui } = pkg;
import generator from 'style-dictionary';
import {
  logBrokenReferenceLevels,
  logVerbosityLevels,
  logWarningLevels,
} from 'style-dictionary/enums';

const PREFIX = 'WDS';
const modes = ['Globals', 'Dark', 'Light', 'Desktop', 'Tablet', 'Mobile'];
const typography_modes = ['Desktop', 'Tablet', 'Mobile'];
const theme_modes = ['Dark', 'Light'];
const size_modes = ['Globals', ...typography_modes];
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
            destination: 'all.ts',
            format: 'javascript/es6',
            filter: `filter/${mode}`,
          },
          {
            destination: 'colors.ts',
            format: 'javascript/es6',
            filter: `filter/${mode}/colors`,
          },
          {
            destination: 'tokens.ts',
            format: 'javascript/es6',
            filter: `filter/${mode}/tokens`,
          },
          {
            destination: 'typography.ts',
            format: 'javascript/es6',
            filter: `filter/${mode}/typography`,
          },
          {
            destination: 'palette.ts',
            format: 'ts/color',
            filter: `filter/${mode}/theme`,
          },
          {
            destination: 'sizes.ts',
            format: 'ts/size',
            filter: `filter/${mode}/size`,
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

const filterMode = (token, mode) => {
  if (token.$type === 'typography') return typography_modes.includes(mode);
  if (!token.$extensions?.mode) return mode === 'Globals';
  // if (token.name.includes('background-primary')) console.log(token);
  let array = Object.keys(token.$extensions?.mode);
  if (array.length === 0 && mode === 'Globals') return true;
  return array.includes(mode);
};

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

handler.registerFormat({
  name: 'ts/color',
  format: function (dictionary) {
    let keyed = {};
    let combined = {};
    let modals = {};
    let base = new Array(12);
    let accent = new Array(12);
    dictionary.dictionary.allTokens.forEach((prop) => {
      if (prop.$type !== 'color') return;
      let name = formatTokenName(prop.name);

      if (name.includes('THEME') && name.includes('ACCENT')) {
        let colorName = [...name.split('_')].pop();
        let index = Number(colorName.replace('COLOR', '')) ?? 0;
        accent[index - 1] = prop.$value;
      }
      if (name.includes('THEME') && name.includes('BASE')) {
        let colorName = [...name.split('_')].pop();
        let index = Number(colorName.replace('COLOR', '')) ?? 0;
        base[index - 1] = prop.$value;
      }

      if (name.includes('MODALS')) {
        let colorGroup = name.split('_')[2];
        let colorName = name.split('_')[3];
        let index = Number(name.split('_')[3].replace(colorName, '')) ?? 0;
        if (!modals[colorGroup.toLowerCase()]) modals[colorGroup.toLowerCase()] = {};
        modals[colorGroup.toLowerCase()][colorName.toLowerCase()] = prop.$value;
        combined[colorName.toLowerCase()] = prop.$value;
        keyed['wds.' + colorName.toLowerCase()] = prop.$value;
      }
    });

    //@ts-ignore
    return `
    export const base = ${JSON.stringify(base, null, 2)}

    export const accent = ${JSON.stringify(accent, null, 2)}

    export const modals = ${JSON.stringify(modals, null, 2)}

    export const aggregator = ${JSON.stringify(combined, null, 2)}

    export const keyed = ${JSON.stringify(keyed, null, 2)}
    `;
  },
});

handler.registerFormat({
  name: 'ts/size',
  format: function (dictionary) {
    let combined = {};
    let radius = {};
    let size = {};
    let zIndex = {};
    let space = {};
    dictionary.dictionary.allTokens.forEach((prop) => {
      if (prop.$type !== 'dimension') return;
      let name = formatTokenName(prop.name);
      let isPrimitive = name.includes('PRIMITIVES');
      let index = isPrimitive ? 3 : 2;
      let property = [...name.split('_')][index].toLowerCase();
      let dim = [...name.split('_')].pop();
      let isNegative = name.includes('NEGATIVE');
      let token = isNegative ? `-${dim}` : dim;
      if (property === 'zindex') property = 'zIndex';
      property = 'wds.' + property;

      if (!combined[property]) combined[property] = {};
      combined[property][token.toLowerCase()] = prop.$value;

      if (property.includes('radius')) radius[token.toLowerCase()] = prop.$value;
      if (property.includes('space')) space[token.toLowerCase()] = prop.$value;
      if (property.includes('zIndex')) zIndex[token.toLowerCase()] = prop.$value;
      if (property.includes('size')) size[token.toLowerCase()] = prop.$value;
    });

    //@ts-ignore
    return `
    export const radius = ${JSON.stringify(radius, null, 2)}

    export const space = ${JSON.stringify(space, null, 2)}

    export const size = ${JSON.stringify(size, null, 2)}

    export const zIndex = ${JSON.stringify(zIndex, null, 2)}

    export const aggregator = ${JSON.stringify(combined, null, 2)}
    `;
  },
});

modes.map(async (mode) => {
  handler.registerFilter({
    name: `filter/${mode}/typography`,
    filter: (token) =>
      filterMode(token, mode) && token.$type === 'typography' && typography_modes.includes(mode),
  });

  handler.registerFilter({
    name: `filter/${mode}/colors`,
    filter: (token) => filterMode(token, mode) && token.$type === 'color',
  });

  handler.registerFilter({
    name: `filter/${mode}/tokens`,
    filter: (token) => filterMode(token, mode) && token.$type === 'dimension',
  });

  handler.registerFilter({
    name: `filter/${mode}`,
    filter: (token) => filterMode(token, mode),
  });

  handler.registerFilter({
    name: `filter/${mode}/theme`,
    filter: (token) =>
      filterMode(token, mode) && token.$type === 'color' && theme_modes.includes(mode),
  });

  handler.registerFilter({
    name: `filter/${mode}/size`,
    filter: (token) =>
      filterMode(token, mode) && token.$type === 'dimension' && size_modes.includes(mode),
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

const sharedConfigOpts = {
  type: 'all',
  formatType: 'js',
  isVariables: true,
  prefix: PREFIX,
  extend: true,
};

const config = [
  {
    // config to generate tamagui.config.ts
    source: [file],
    transforms: ['attribute/cti', 'name/kebab'],
    buildPath: `${path}/tamagui/`,
    fileName: 'tamagui.config.ts',
    ...sharedConfigOpts,
    hooks: {
      formats: {
        tamaguiFormat: ({ dictionary }) => {
          return getTamaguiConfigFormat({
            dictionary,
            ...sharedConfigOpts,
          });
        },
      },
    },
  },
  {
    // config to generate theme.ts
    source: [file],
    transforms: ['attribute/cti', 'name/kebab'],
    buildPath: `${path}/tamagui/`,
    fileName: 'themes.ts',
    ...sharedConfigOpts,
    hooks: {
      formats: {
        tamaguiFormat: ({ dictionary }) => {
          return getTamaguiThemeFormat({
            dictionary,
            ...sharedConfigOpts,
          });
        },
      },
    },
  },
];

const run = async () => {
  config.forEach(async (c) => {
    const builder = new StyleDictionaryModule(makeSdTamagui(c));
    await builder.hasInitialized;
    await builder.buildAllPlatforms();
  });
};

run();
