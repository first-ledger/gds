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
