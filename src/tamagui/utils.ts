import { camelCase } from 'change-case';
import type { SdObjType, SdTamaguiConfigType } from './types';

export const addHyphen = (str: string) => {
  return str.endsWith('-') ? str : `${str}-`;
};

export const makeSdObject = <T extends readonly string[]>(
  obj: SdObjType<{ [key: string]: any }>,
  keys: T,
  value: string
): void => {
  const lastIndex = keys.length - 1;
  for (let i = 0; i < lastIndex; ++i) {
    const key = camelCase(keys[i]);
    if (!(key in obj)) {
      obj[key] = {};
    }
    obj = obj[key];
  }

  // https://v2.tailwindcss.com/docs/upgrading-to-v2#update-default-theme-keys-to-default
  if (keys[lastIndex] === 'DEFAULT') {
    obj[keys[lastIndex]] = value;
  } else {
    obj[camelCase(keys[lastIndex])] = value;
  }
};

export const getConfigValue = <T>(value: T | undefined, defaultValue: T) => {
  if (value === undefined) {
    return defaultValue;
  }

  return value;
};

const joinSpace = (value: string, spaceNum: number, type?: string) => {
  const space = ' '.repeat(spaceNum);

  if (type !== 'all') {
    return value;
  }

  return space + value;
};

export const unquoteFromKeys = (json: string, type?: string, spaceNum = 4) => {
  const result = json.replace(/"(\\[^]|[^\\"])*"\s*:?/g, (match) => {
    if (/[0-9]/.test(match) && /[a-zA-Z]/.test(match)) {
      return match;
    }
    if (/:$/.test(match)) {
      return joinSpace(match.replace(/^"|"(?=\s*:$)/g, ''), spaceNum, type);
    }

    return match;
  });

  return result.replace(/}/g, (match) => joinSpace(match, spaceNum, type));
};

export const getConfigTemplate = (
  type: SdTamaguiConfigType['type'],
  content: string,
  extend: SdTamaguiConfigType['extend']
) => {
  const template = `
    import { createTamagui, createTokens } from 'tamagui';
    import { defaultConfig } from '@tamagui/config/v4'
    import { themes } from './themes';

    // Import Colors
    import * as Light from './assets/Light/palette';
    import * as Dark from './assets/Dark/palette';

    // Import Primitives
    import * as Globals from './assets/Globals/tokens';

    // Import Tokens
    import * as Tokens from './assets/Desktop/tokens';

    // Import Sizes
    import * as GlobalSizes from './assets/Globals/sizes';
    import * as Sizes from './assets/Desktop/sizes';

    // Import Fonts
    import * as Fonts from './assets/Desktop/fonts';


    const tokens = createTokens({
      light: { ...Light.keyed },
      dark: { ...Dark.keyed },
      default_dark:  { ...Dark.keyed },
      default_light: { ...Light.keyed },
      alt_dark:  { ...Dark.keyed },
      alt_light: { ...Light.keyed },
      neutral_light:{ ...Light.keyed },
      neutral_dark:  { ...Dark.keyed },

      globals: { ...Globals },

      ...GlobalSizes.aggregator,
      ...Sizes.aggregator,
      ...Fonts.fonts,

      // Start of overrides
      // Overrides the default tamagui size tokens
      radius: {
        ...defaultConfig.tokens.radius,
        ...GlobalSizes.radius,
        ...Sizes.radius,
      },
      space: {
        ...defaultConfig.tokens.space,
        ...GlobalSizes.space,
        ...Sizes.space,
      },
      size: {
        ...defaultConfig.tokens.size,
        ...GlobalSizes.size,
        ...Sizes.size,
      },
      zIndex: {
        ...defaultConfig.tokens.zIndex,
        ...GlobalSizes.zIndex,
        ...Sizes.zIndex,
      },
      // End of overrides
    });

    // Create Tamagui config
    const config = createTamagui({
      ...defaultConfig,
      themes,
      fonts: Fonts.aggregation,
      tokens: {
        ...defaultConfig.tokens,
        ...tokens,
      },
      settings: {
        ...defaultConfig.settings,
        disableSSR: true,
        onlyAllowShorthands: false,
      },
    });

    export default config

    export type Conf = typeof config

    declare module 'tamagui' {
      interface TamaguiCustomConfig extends Conf {}
}
  `;
  /*   ${getTemplateConfig()} */

  return template;
};

export const getThemeTemplate = (
  type: SdTamaguiConfigType['type'],
  content: string,
  extend: SdTamaguiConfigType['extend']
) => {
  const template = `
      import { createThemes, defaultComponentThemes } from '@tamagui/theme-builder';

      // Import Themed Palettes
      import * as Dark from './assets/Dark/palette';
      import * as Light from './assets/Light/palette';

      // Import Themed Palettes
      import * as Default from './assets/themes/Default/palette';
      import * as Alternative from './assets/themes/Alternative/palette';
      import * as Neutral from './assets/themes/Neutral/palette';

      const builtThemes = createThemes({

        componentThemes: defaultComponentThemes,

        base: {
          palette: {
            dark: Default.base_dark,
            light: Default.base_light,
            // @ts-ignore
            default_dark: Default.base_dark,
            default_light: Default.base_light,
            alt_light: Alternative.base_light,
            alt_dark: Alternative.base_light,
            neutral_light: Neutral.base_light,
            neutral_dark: Neutral.base_light,
          },
        },

        accent: {
          palette: {
            dark: Default.accent_dark,
            light: Default.accent_light,
            default_dark: Default.accent_dark,
            default_light: Default.accent_light,
            alt_light: Alternative.accent_light,
            alt_dark: Alternative.accent_light,
            neutral_light: Neutral.accent_light,
            neutral_dark: Neutral.accent_light,
          },
        },

        ghost: {
          palette: {
            dark: Default.ghost_dark,
            light: Default.ghost_light,
            default_dark: Default.ghost_dark,
            default_light: Default.ghost_light,
            alt_light: Alternative.ghost_light,
            alt_dark: Alternative.ghost_light,
            neutral_light: Neutral.ghost_light,
            neutral_dark: Neutral.ghost_light,
          },
        },

        muted: {
          palette: {
            dark: Default.muted_dark,
            light: Default.muted_light,
            default_dark: Default.muted_dark,
            default_light: Default.muted_light,
            alt_light: Alternative.muted_light,
            alt_dark: Alternative.muted_light,
            neutral_light: Neutral.muted_light,
            neutral_dark: Neutral.muted_light,
          },
        },

        childrenThemes: {
          warning: {
            palette: {
              dark: Object.values(Dark.modals.yellow),
              light: Object.values(Light.modals.yellow),
              default_dark: Object.values(Dark.modals.yellow),
              default_light:  Object.values(Light.modals.yellow),
              alt_light: Object.values(Light.modals.yellow),
              alt_dark: Object.values(Dark.modals.yellow),
              neutral_light: Object.values(Light.modals.yellow),
              neutral_dark: Object.values(Dark.modals.yellow),
            },
          },

          error: {
            palette: {
              dark: Object.values(Dark.modals.red),
              light: Object.values(Light.modals.red),
              default_dark: Object.values(Dark.modals.red),
              default_light:  Object.values(Light.modals.red),
              alt_light: Object.values(Light.modals.red),
              alt_dark: Object.values(Dark.modals.red),
              neutral_light: Object.values(Light.modals.red),
              neutral_dark: Object.values(Dark.modals.red),
            },
          },

          success: {
            palette: {
              dark: Object.values(Dark.modals.green),
              light: Object.values(Light.modals.green),
              default_dark: Object.values(Dark.modals.green),
              default_light:  Object.values(Light.modals.green),
              alt_light: Object.values(Light.modals.green),
              alt_dark: Object.values(Dark.modals.green),
              neutral_light: Object.values(Light.modals.green),
              neutral_dark: Object.values(Dark.modals.green),
            },
          },

          neutral: {
            palette: {
              dark: Object.values(Dark.modals.gray),
              light: Object.values(Light.modals.gray),
              default_dark: Object.values(Dark.modals.gray),
              default_light:  Object.values(Light.modals.gray),
              alt_light: Object.values(Light.modals.gray),
              alt_dark: Object.values(Dark.modals.gray),
              neutral_light: Object.values(Light.modals.gray),
              neutral_dark: Object.values(Dark.modals.gray),
            },
          },
        },

      });

      export type Themes = typeof builtThemes;

      // this is optional, but saves client-side JS bundle size by leaving out themes on client.
      // tamagui automatically hydrates themes from css back into JS for you and the tamagui
      // bundler plugins automate setting TAMAGUI_ENVIRONMENT.

      export const themes: Themes =
        process.env.TAMAGUI_ENVIRONMENT === 'client' && process.env.NODE_ENV === 'production'
          ? ({} as any)
          : (builtThemes as any);
  `;

  return template;
};

export default {
  makeSdObject,
  addHyphen,
  getConfigTemplate,
  getThemeTemplate,
  unquoteFromKeys,
  getConfigValue,
};
