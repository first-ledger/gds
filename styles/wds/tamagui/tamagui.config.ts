import { createTamagui, createTokens } from 'tamagui';
import { defaultConfig } from '@tamagui/config/v4';
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

export default config;

export type Conf = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
