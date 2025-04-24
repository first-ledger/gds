import { createThemes, defaultComponentThemes } from '@tamagui/theme-builder';

// Import Themed Palettes
import * as Dark from './assets/Dark/palette';
import * as Light from './assets/Light/palette';

// Import Themed Palettes
import * as Default from './assets/themes/Default/palette';
import * as Alternative from './assets/themes/Alternative/palette';
import * as Neutral from './assets/themes/Neutral/palette';

export const builtThemes = createThemes({
  componentThemes: defaultComponentThemes,

  base: {
    palette: {
      dark: Default.base_dark,
      light: Default.base_light,
      // @ts-ignore
      default_dark: Default.base_dark,
      default_light: Default.base_light,
      alt_dark: Alternative.base_dark,
      alt_light: Alternative.base_light,
      neutral_dark: Neutral.base_dark,
      neutral_light: Neutral.base_light,
    },
  },

  accent: {
    palette: {
      dark: Default.accent_dark,
      light: Default.accent_light,
      default_dark: Default.accent_dark,
      default_light: Default.accent_light,
      alt_dark: Alternative.accent_dark,
      alt_light: Alternative.accent_light,
      neutral_dark: Neutral.accent_dark,
      neutral_light: Neutral.accent_light,
    },
  },

  ghost: {
    palette: {
      dark: Default.ghost_dark,
      light: Default.ghost_light,
      default_dark: Default.ghost_dark,
      default_light: Default.ghost_light,
      alt_dark: Alternative.ghost_dark,
      alt_light: Alternative.ghost_light,
      neutral_dark: Neutral.ghost_dark,
      neutral_light: Neutral.ghost_light,
    },
  },

  muted: {
    palette: {
      dark: Default.muted_dark,
      light: Default.muted_light,
      default_dark: Default.muted_dark,
      default_light: Default.muted_light,
      alt_dark: Alternative.muted_dark,
      alt_light: Alternative.muted_light,
      neutral_dark: Neutral.muted_dark,
      neutral_light: Neutral.muted_light,
    },
  },

  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(Dark.modals.yellow),
        light: Object.values(Light.modals.yellow),
        default_dark: Object.values(Dark.modals.yellow),
        default_light: Object.values(Light.modals.yellow),
        alt_dark: Object.values(Dark.modals.yellow),
        alt_light: Object.values(Light.modals.yellow),
        neutral_dark: Object.values(Dark.modals.yellow),
        neutral_light: Object.values(Light.modals.yellow),
      },
    },

    error: {
      palette: {
        dark: Object.values(Dark.modals.red),
        light: Object.values(Light.modals.red),
        default_dark: Object.values(Dark.modals.red),
        default_light: Object.values(Light.modals.red),
        alt_dark: Object.values(Dark.modals.red),
        alt_light: Object.values(Light.modals.red),
        neutral_dark: Object.values(Dark.modals.red),
        neutral_light: Object.values(Light.modals.red),
      },
    },

    success: {
      palette: {
        dark: Object.values(Dark.modals.green),
        light: Object.values(Light.modals.green),
        default_dark: Object.values(Dark.modals.green),
        default_light: Object.values(Light.modals.green),
        alt_dark: Object.values(Dark.modals.green),
        alt_light: Object.values(Light.modals.green),
        neutral_dark: Object.values(Dark.modals.green),
        neutral_light: Object.values(Light.modals.green),
      },
    },

    neutral: {
      palette: {
        dark: Object.values(Dark.modals.gray),
        light: Object.values(Light.modals.gray),
        default_dark: Object.values(Dark.modals.gray),
        default_light: Object.values(Light.modals.gray),
        alt_dark: Object.values(Dark.modals.gray),
        alt_light: Object.values(Light.modals.gray),
        neutral_dark: Object.values(Dark.modals.gray),
        neutral_light: Object.values(Light.modals.gray),
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
