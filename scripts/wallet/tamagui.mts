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
const keyed_modes = ['Default', 'Alternative', 'Neutral'];
const general_modes = ['Globals', 'Dark', 'Light', 'Desktop'];
const modes = [...general_modes, ...keyed_modes];
const typography_modes = ['Desktop'];
const theme_modes = ['Dark', 'Light', ...keyed_modes];
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
          {
            destination: 'fonts.ts',
            format: 'ts/font',
            filter: `filter/${mode}/font`,
          },
        ],
      },
    },
  };
};

const createThemeConfig = (mode, platform) => {
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
        buildPath: `${path}/tamagui/assets/themes/${mode}/`,
        prefix: PREFIX,
        files: [
          {
            destination: 'palette.ts',
            format: 'ts/palette',
            filter: `filter/${mode}/theme`,
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

// ts/color
handler.registerFormat({
  name: 'ts/color',
  format: function (dictionary) {
    let keyed = {};
    let combined = {};
    let modals = {};
    let base = new Array(20).fill('#ffffff');
    let accent = new Array(20).fill('#ffffff');
    let ghost = new Array(20).fill('#ffffff');
    let muted = new Array(20).fill('#ffffff');
    let shadow = new Array(20).fill('#ffffff');

    dictionary.dictionary.allTokens.forEach((prop) => {
      if (prop.$type !== 'color') return;
      let name = formatTokenName(prop.name);

      if (name.includes('COLOR') && name.includes('ACCENT')) {
        let colorName = [...name.split('_')].pop();
        let index = Number(colorName.replace('COLOR', '')) ?? 0;
        accent[index - 1] = prop.$value;
      }
      if (name.includes('COLOR') && name.includes('BASE')) {
        let colorName = [...name.split('_')].pop();
        let index = Number(colorName.replace('COLOR', '')) ?? 0;
        base[index - 1] = prop.$value;
      }
      if (name.includes('COLOR') && name.includes('GHOST')) {
        let colorName = [...name.split('_')].pop();
        let index = Number(colorName.replace('COLOR', '')) ?? 0;
        ghost[index - 1] = prop.$value;
      }
      if (name.includes('COLOR') && name.includes('MUTED')) {
        let colorName = [...name.split('_')].pop();
        let index = Number(colorName.replace('COLOR', '')) ?? 0;
        muted[index - 1] = prop.$value;
      }
      if (name.includes('COLOR') && name.includes('SHADOW')) {
        let colorName = [...name.split('_')].pop();
        let index = Number(colorName.replace('COLOR', '')) ?? 0;
        shadow[index - 1] = prop.$value;
      }

      if (name.includes('COLORS') && name.includes('DEFAULTS')) {
        let colorGroup = name.split('_')[3];
        let colorName = name.split('_')[4];
        let index = Number(name.split('_')[4].replace(colorName, '')) ?? 0;
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

    export const ghost = ${JSON.stringify(ghost, null, 2)}

    export const muted = ${JSON.stringify(muted, null, 2)}

    export const shadow = ${JSON.stringify(shadow, null, 2)}

    export const modals = ${JSON.stringify(modals, null, 2)}

    export const aggregator = ${JSON.stringify(combined, null, 2)}

    export const keyed = ${JSON.stringify(keyed, null, 2)}
    `;
  },
});

// ts/palette
handler.registerFormat({
  name: 'ts/palette',
  format: function (dictionary) {
    const holders = {
      dark: {
        base: new Array(20),
        accent: new Array(20),
        ghost: new Array(20),
        muted: new Array(20),
        shadow: new Array(20),
      },
      light: {
        base: new Array(20),
        accent: new Array(20),
        ghost: new Array(20),
        muted: new Array(20),
        shadow: new Array(20),
      },
    };

    dictionary.dictionary.allTokens.forEach((prop) => {
      ['dark', 'light'].map((theme) => {
        if (prop.$type !== 'color') return;
        let name = formatTokenName(prop.name);

        let v = prop.original.$value.replace('{', '').replace('}', '');
        let variableArray = v.split('.');
        let len = variableArray.length;

        const palettes = ['base', 'accent', 'ghost', 'muted', 'shadow'];

        let color = variableArray[len - 3].replace('_', '').toLowerCase();
        let isPalette = palettes.includes(color);
        let id = !isPalette
          ? variableArray[len - 2]
          : parseInt(variableArray[len - 2].replace('color', '')) - 1;
        let variable = !isPalette ? `${theme}.modals.${color}.${id}` : `${theme}.${color}[${id}]`;
        // .replace('.$value', '')
        // .replace('Colors._', '');

        if (name.includes('COLOR') && name.includes('ACCENT')) {
          let colorName = [...name.split('_')].pop();
          let index = Number(colorName.replace('COLOR', '')) ?? 0;
          holders[theme].accent[index - 1] = variable;
        }
        if (name.includes('COLOR') && name.includes('BASE')) {
          let colorName = [...name.split('_')].pop();
          let index = Number(colorName.replace('COLOR', '')) ?? 0;
          holders[theme].base[index - 1] = variable;
        }
        if (name.includes('COLOR') && name.includes('GHOST')) {
          let colorName = [...name.split('_')].pop();
          let index = Number(colorName.replace('COLOR', '')) ?? 0;
          holders[theme].ghost[index - 1] = variable;
        }
        if (name.includes('COLOR') && name.includes('MUTED')) {
          let colorName = [...name.split('_')].pop();
          let index = Number(colorName.replace('COLOR', '')) ?? 0;
          holders[theme].muted[index - 1] = variable;
        }
        if (name.includes('COLOR') && name.includes('SHADOW')) {
          let colorName = [...name.split('_')].pop();
          let index = Number(colorName.replace('COLOR', '')) ?? 0;
          holders[theme].shadow[index - 1] = variable;
        }
      });
    });

    const format = (s: string) => s.replaceAll(`"`, '').replaceAll('null', `'#ffffff'`);

    //@ts-ignore
    return `
      import * as dark from '../../Dark/palette'
      import * as light from '../../Light/palette'

      export const base_dark = ${format(JSON.stringify(holders.dark.base, null, 2))}

      export const accent_dark = ${format(JSON.stringify(holders.dark.accent, null, 2))}

      export const ghost_dark = ${format(JSON.stringify(holders.dark.ghost, null, 2))}

      export const muted_dark = ${format(JSON.stringify(holders.dark.muted, null, 2))}

      export const shadow_dark = ${format(JSON.stringify(holders.dark.shadow, null, 2))}

      export const base_light = ${format(JSON.stringify(holders.light.base, null, 2))}

      export const accent_light = ${format(JSON.stringify(holders.light.accent, null, 2))}

      export const ghost_light = ${format(JSON.stringify(holders.light.ghost, null, 2))}

      export const muted_light = ${format(JSON.stringify(holders.light.muted, null, 2))}

      export const shadow_light = ${format(JSON.stringify(holders.light.shadow, null, 2))}
    `;

    // export const modals = ${JSON.stringify(modals, null, 2)}

    // export const aggregator = ${JSON.stringify(combined, null, 2)}

    // export const keyed = ${JSON.stringify(keyed, null, 2)}
    // `;
  },
});

// ts/size
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

      if (typeof prop.$value === 'string' && prop.$value.includes('px'))
        prop.$value.replace('px', '');

      prop.$value = parseFloat(prop.$value);

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

// ts/font
handler.registerFormat({
  name: 'ts/font',
  format: function (dictionary) {
    let combined = {};
    let fontFamilies: Set<string> = new Set();
    let fonts = {};
    let variants = {};
    let size = {};
    let zIndex = {};
    let space = {};
    dictionary.dictionary.allTokens.forEach((prop) => {
      if (prop.$type !== 'typography') return;
      let name = formatTokenName(prop.name);

      let property = [...name.split('_')].slice(3).join('.').toLowerCase();
      let fontGroup = [...name.split('_')].slice(3)[0].toLowerCase();
      let typeOne = [...name.split('_')].slice(3)[1].toLowerCase();
      let typeTwo = [...name.split('_')].slice(3)[2].toLowerCase();
      let typeThree;
      if ([...name.split('_')].slice(3).length > 3)
        typeThree = [...name.split('_')].slice(3)[3].toLowerCase();

      if (typeThree) fontGroup = fontGroup + '_' + typeOne;

      let isTypeOneWeight = false;
      let isTypeTwoWeight = false;

      let isTypeOneDecriptor = false;
      if (typeThree) isTypeOneDecriptor = true;

      if (
        !isTypeOneDecriptor &&
        ['light', 'regular', 'medium', 'semibold', 'bold', 'extrabold', 'strong'].includes(typeOne)
      )
        isTypeOneWeight = true;

      if (
        isTypeOneDecriptor &&
        ['light', 'regular', 'medium', 'semibold', 'bold', 'extrabold', 'strong'].includes(typeTwo)
      )
        isTypeTwoWeight = true;

      if (fontGroup === 'label') isTypeOneWeight = false;

      if (!combined[fontGroup]) combined[fontGroup] = {};

      let family = ['family', prop.$value['fontFamily']];
      let weight = ['weight', prop.$value['fontWeight']];
      let size = ['size', parseInt(prop.$value['fontSize'].replace('px', ''))];

      let lineHeight = prop.$value['lineHeight'];
      if (lineHeight === 'auto' || lineHeight === null) lineHeight = '120%';
      const isLineHeightPercent = lineHeight.includes('%');
      if (!isLineHeightPercent) lineHeight = parseInt(lineHeight.replace('px', ''));
      if (isLineHeightPercent) lineHeight = parseInt(lineHeight.replace('%', ''));
      // @ts-ignore
      if (isLineHeightPercent) lineHeight = (lineHeight / 100) * size[1];
      let line = ['lineHeight', Math.round(lineHeight * 100) / 100];

      let letterSpacing = prop.$value['letterSpacing'];
      if (letterSpacing === 'auto' || letterSpacing === null) letterSpacing = '0%';
      const isLetterSpacingPercent = letterSpacing.includes('%');
      if (!isLetterSpacingPercent) letterSpacing = parseInt(letterSpacing.replace('px', ''));
      if (isLetterSpacingPercent) letterSpacing = parseInt(letterSpacing.replace('%', ''));
      // @ts-ignore
      if (isLetterSpacingPercent) letterSpacing = (letterSpacing / 100) * size[1];
      let spacing = ['letterSpacing', Math.round(letterSpacing * 100) / 100];

      if (!combined[fontGroup][family[0]]) combined[fontGroup][family[0]] = {};
      combined[fontGroup][family[0]] = family[1];

      if (!variants[property]) variants[property] = {};
      variants[property]['fontFamily'] = family[1];
      fontFamilies.add(family[1]);

      [weight, size, line, spacing].forEach(([name, value]) => {
        let type = isTypeOneWeight ? typeTwo : typeOne;

        if (name === 'weight' && isTypeOneWeight) type = typeOne;
        if (name === 'weight' && !isTypeOneWeight) type = typeTwo;

        if (typeThree && name === 'weight' && isTypeTwoWeight) type = typeTwo;
        if (typeThree && name === 'weight' && !isTypeTwoWeight) type = typeThree;

        if (!combined[fontGroup][name]) combined[fontGroup][name] = {};
        combined[fontGroup][name][type] = value;

        if (name === 'weight') name = 'fontWeight';
        if (name === 'size') name = 'fontSize';
        if (name === 'line') name = 'lineHeight';
        if (name === 'spacing') name = 'letterSpacing';

        if (!variants[property]) variants[property] = {};
        variants[property][name] = value;
      });

      property = 'wds.' + property;

      if (!fonts[property]) fonts[property] = {};
      fonts[property] = prop.$value;

      // if (property.includes('radius')) radius[token.toLowerCase()] = prop.$value;
      // if (property.includes('space')) space[token.toLowerCase()] = prop.$value;
      // if (property.includes('zIndex')) zIndex[token.toLowerCase()] = prop.$value;
      // if (property.includes('size')) size[token.toLowerCase()] = prop.$value;
    });

    let fontGroups = Object.entries(combined);
    let c = '';
    let a = '';

    fontGroups.map(([type, content]) => {
      let s = `
        export const ${type}_font = createFont(
          ${JSON.stringify(content)})
      `;
      c = c + s;
    });

    fontGroups.map(([type, content]) => {
      let t = type.replace('_', '.');

      let s = `'${t}' : ${type}_font,`;
      a = a + s;
    });

    let processedVariants = JSON.stringify(variants, null, 2).replaceAll('}', '} as const');
    fontFamilies.forEach((family) => {
      console.log(family);
      processedVariants = processedVariants.replaceAll(
        `"fontFamily": "${family}"`,
        `"fontFamily": "${family}" as "unset"`
      );
    });

    //@ts-ignore
    return `
    import { createFont } from 'tamagui'

    export const fonts = ${JSON.stringify(fonts, null, 2)}

    export const variants = ${processedVariants}

    ${c}

    export const aggregation = {${a}}
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

  handler.registerFilter({
    name: `filter/${mode}/font`,
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

// General Builder for modes
platforms.map((platform) =>
  general_modes.map(async (mode) => {
    let builder = await handler.extend(createConfig(mode, platform));
    builder.buildPlatform('web/js');
  })
);

// Builder for keyed themes
platforms.map((platform) =>
  keyed_modes.map(async (mode) => {
    let builder = await handler.extend(createThemeConfig(mode, platform));
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
          // @ts-ignore
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
          // @ts-ignore
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
    // @ts-ignore
    const builder = new StyleDictionaryModule(makeSdTamagui(c));
    await builder.hasInitialized;
    await builder.buildAllPlatforms();
  });
};

run();
