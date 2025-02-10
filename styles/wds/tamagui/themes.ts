import { createThemes, defaultComponentThemes } from '@tamagui/theme-builder';
import * as Colors from '@tamagui/colors';

const darkPalette = [
  'hsla(0, 15%, 1%, 1)',
  'hsla(0, 13%, 6%, 1)',
  'hsla(0, 12%, 12%, 1)',
  'hsla(0, 10%, 17%, 1)',
  'hsla(0, 8%, 23%, 1)',
  'hsla(0, 7%, 28%, 1)',
  'hsla(0, 5%, 34%, 1)',
  'hsla(0, 3%, 39%, 1)',
  'hsla(0, 2%, 45%, 1)',
  'hsla(0, 0%, 50%, 1)',
  'hsla(172, 40%, 93%, 1)',
  'hsla(0, 15%, 99%, 1)',
];
const lightPalette = [
  'hsla(0, 15%, 99%, 1)',
  'hsla(0, 13%, 94%, 1)',
  'hsla(0, 12%, 88%, 1)',
  'hsla(0, 10%, 83%, 1)',
  'hsla(0, 8%, 77%, 1)',
  'hsla(0, 7%, 72%, 1)',
  'hsla(0, 5%, 66%, 1)',
  'hsla(0, 3%, 61%, 1)',
  'hsla(0, 2%, 55%, 1)',
  'hsla(0, 0%, 50%, 1)',
  'hsla(172, 40%, 15%, 1)',
  'hsla(0, 15%, 1%, 1)',
];

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
  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette,
    },

    extra: {
      light: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        shadowColor: lightShadows.shadow1,
      },
      dark: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        shadowColor: darkShadows.shadow1,
      },
    },
  },

  accent: {
    palette: {
      dark: [
        'hsla(191, 100%, 32%, 1)',
        'hsla(191, 100%, 35%, 1)',
        'hsla(191, 100%, 38%, 1)',
        'hsla(191, 100%, 41%, 1)',
        'hsla(191, 100%, 44%, 1)',
        'hsla(191, 100%, 48%, 1)',
        'hsla(191, 100%, 51%, 1)',
        'hsla(191, 100%, 54%, 1)',
        'hsla(191, 100%, 57%, 1)',
        'hsla(191, 100%, 60%, 1)',
        'hsla(250, 50%, 90%, 1)',
        'hsla(250, 50%, 95%, 1)',
      ],
      light: [
        'hsla(191, 100%, 38%, 1)',
        'hsla(191, 100%, 41%, 1)',
        'hsla(191, 100%, 44%, 1)',
        'hsla(191, 100%, 47%, 1)',
        'hsla(191, 100%, 50%, 1)',
        'hsla(191, 100%, 53%, 1)',
        'hsla(191, 100%, 56%, 1)',
        'hsla(191, 100%, 59%, 1)',
        'hsla(191, 100%, 62%, 1)',
        'hsla(191, 100%, 65%, 1)',
        'hsla(250, 50%, 95%, 1)',
        'hsla(250, 50%, 95%, 1)',
      ],
    },
  },

  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow),
      },
    },

    error: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red),
      },
    },

    success: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green),
      },
    },
  },

  // optionally add more, can pass palette or template

  // grandChildrenThemes: {
  //   alt1: {
  //     template: 'alt1',
  //   },
  //   alt2: {
  //     template: 'alt2',
  //   },
  //   surface1: {
  //     template: 'surface1',
  //   },
  //   surface2: {
  //     template: 'surface2',
  //   },
  //   surface3: {
  //     template: 'surface3',
  //   },
  // },
});

export type Themes = typeof builtThemes;

// this is optional, but saves client-side JS bundle size by leaving out themes on client.
// tamagui automatically hydrates themes from css back into JS for you and the tamagui
// bundler plugins automate setting TAMAGUI_ENVIRONMENT.

export const themes: Themes =
  process.env.TAMAGUI_ENVIRONMENT === 'client' && process.env.NODE_ENV === 'production'
    ? ({} as any)
    : (builtThemes as any);
