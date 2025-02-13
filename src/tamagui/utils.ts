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
    import * as Desktop from './assets/Desktop/tokens';
    import * as Mobile from './assets/Mobile/tokens';
    import * as Tablet from './assets/Tablet/tokens';

    // Import Sizes
    import * as GlobalSizes from './assets/Globals/sizes';
    import * as MobileSizes from './assets/Mobile/sizes';

    const tokens = createTokens({
      light: { ...Light.keyed },
      dark: { ...Dark.keyed },

      globals: { ...Globals },
      desktop: { ...Desktop },
      tablet: { ...Tablet },
      mobile: { ...Mobile },

      ...GlobalSizes.aggregator,
      ...MobileSizes.aggregator,

      // Start of overrides
      // Overrides the default tamagui size tokens
      radius: {
        ...defaultConfig.tokens.radius,
        ...GlobalSizes.radius,
        ...MobileSizes.radius,
      },
      space: {
        ...defaultConfig.tokens.space,
        ...GlobalSizes.space,
        ...MobileSizes.space,
      },
      size: {
        ...defaultConfig.tokens.size,
        ...GlobalSizes.size,
        ...MobileSizes.size,
      },
      zIndex: {
        ...defaultConfig.tokens.zIndex,
        ...GlobalSizes.zIndex,
        ...MobileSizes.zIndex,
      },
      // End of overrides
    });

    // Create Tamagui config
    const config = createTamagui({
      ...defaultConfig,
      themes,
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

      // Import WDS Colors
      import * as Light from './assets/Light/palette';
      import * as Dark from './assets/Dark/palette';

      const lightShadows = {
        shadow1: 'rgba(0,0,0,0.04)',
        shadow2: 'rgba(0,0,0,0.08)',
        shadow3: 'rgba(0,0,0,0.16)',
        shadow4: 'rgba(0,0,0,0.24)',
        shadow5: 'rgba(0,0,0,0.32)',
        shadow6: 'rgba(0,0,0,0.4)',
      };

      const darkShadows = {
        shadow1: 'rgba(0,0,0,0.2)',
        shadow2: 'rgba(0,0,0,0.3)',
        shadow3: 'rgba(0,0,0,0.4)',
        shadow4: 'rgba(0,0,0,0.5)',
        shadow5: 'rgba(0,0,0,0.6)',
        shadow6: 'rgba(0,0,0,0.7)',
      };

      // we're adding some example sub-themes for you to show how they are done, "success" "warning", "error":

      const builtThemes = createThemes({

        // Component design tokens, outside of components -> defaults to base template
          // background: string;
          // backgroundFocus: string;
          // backgroundHover: string;
          // backgroundPress: string;
          // borderColor: string;
          // borderColorFocus: string;
          // borderColorHover: string;
          // borderColorPress: string;
          // color: string;
          // colorFocus: string;
          // colorHover: string;
          // colorPress: string;
          // colorTransparent: string;
          // placeholderColor: string;
          // shadowColor: string;
          // shadowColorFocus: string;
          // shadowColorHover: string;
          // shadowColorPress: string;
        componentThemes: defaultComponentThemes,

        base: {
          palette: {
            dark: Dark.base,
            light: Light.base,
          },

          extra: {
            light: {
              ...Light.keyed,
              ...lightShadows,
              shadowColor: lightShadows.shadow1,
            },
            dark: {
              ...Dark.keyed,
              ...darkShadows,
              shadowColor: darkShadows.shadow1,
            },
          },
        },

        accent: {
          palette: {
            dark: Dark.accent,
            light: Light.accent,
          },
        },

        childrenThemes: {
          warning: {
            palette: {
              dark: Object.values(Dark.modals.yellow),
              light: Object.values(Light.modals.yellow),
            },
          },

          error: {
            palette: {
              dark: Object.values(Dark.modals.red),
              light: Object.values(Light.modals.red),
            },
          },

          success: {
            palette: {
              dark: Object.values(Dark.modals.green),
              light: Object.values(Light.modals.green),
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
