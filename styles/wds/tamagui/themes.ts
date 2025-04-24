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
      nuetral_light: Neutral.base_light,
      nuetral_dark: Neutral.base_light,
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
      nuetral_light: Neutral.accent_light,
      nuetral_dark: Neutral.accent_light,
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
      nuetral_light: Neutral.ghost_light,
      nuetral_dark: Neutral.ghost_light,
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
      nuetral_light: Neutral.muted_light,
      nuetral_dark: Neutral.muted_light,
    },
  },

  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(Dark.modals.yellow),
        light: Object.values(Light.modals.yellow),
        default_dark: Object.values(Dark.modals.yellow),
        default_light: Object.values(Light.modals.yellow),
        alt_light: Object.values(Light.modals.yellow),
        alt_dark: Object.values(Dark.modals.yellow),
        nuetral_light: Object.values(Light.modals.yellow),
        nuetral_dark: Object.values(Dark.modals.yellow),
      },
    },

    error: {
      palette: {
        dark: Object.values(Dark.modals.red),
        light: Object.values(Light.modals.red),
        default_dark: Object.values(Dark.modals.red),
        default_light: Object.values(Light.modals.red),
        alt_light: Object.values(Light.modals.red),
        alt_dark: Object.values(Dark.modals.red),
        nuetral_light: Object.values(Light.modals.red),
        nuetral_dark: Object.values(Dark.modals.red),
      },
    },

    danger: {
      palette: {
        dark: Object.values(Dark.modals.red),
        light: Object.values(Light.modals.red),
        default_dark: Object.values(Dark.modals.red),
        default_light: Object.values(Light.modals.red),
        alt_light: Object.values(Light.modals.red),
        alt_dark: Object.values(Dark.modals.red),
        nuetral_light: Object.values(Light.modals.red),
        nuetral_dark: Object.values(Dark.modals.red),
      },
    },

    success: {
      palette: {
        dark: Object.values(Dark.modals.green),
        light: Object.values(Light.modals.green),
        default_dark: Object.values(Dark.modals.green),
        default_light: Object.values(Light.modals.green),
        alt_light: Object.values(Light.modals.green),
        alt_dark: Object.values(Dark.modals.green),
        nuetral_light: Object.values(Light.modals.green),
        nuetral_dark: Object.values(Dark.modals.green),
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
