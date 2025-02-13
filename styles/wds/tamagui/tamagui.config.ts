import { createTamagui, createTokens } from 'tamagui';
import { defaultConfig } from '@tamagui/config/v4';
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

export default config;

export type Conf = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
