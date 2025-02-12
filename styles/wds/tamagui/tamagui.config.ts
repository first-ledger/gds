import { createTamagui, createTokens } from 'tamagui';
import { defaultConfig } from '@tamagui/config/v4';
import { themes } from './themes';

// Import Colors
import * as LightColors from './assets/Light/colors';
import * as DarkColors from './assets/Dark/colors';
import * as GlobalColors from './assets/Globals/colors';

// Import Primitives
import * as Globals from './assets/Globals/tokens';

// Import Tokens
import * as Desktop from './assets/Desktop/tokens';
import * as Mobile from './assets/Mobile/tokens';
import * as Tablet from './assets/Tablet/tokens';

// Import Sizes
import * as GlobalSizes from './assets/Globals/sizes';
import * as DesktopSizes from './assets/Desktop/sizes';
import * as MobileSizes from './assets/Mobile/sizes';
import * as TabletSizes from './assets/Tablet/sizes';

// Import Typography
import * as DesktopTypography from './assets/Desktop/typography';
import * as MobileTypography from './assets/Mobile/typography';
import * as TabletTypography from './assets/Tablet/typography';

// Define all acceptable variable token names
const colors = createTokens({
  light: { ...LightColors },
  dark: { ...DarkColors },
  primitives: { ...GlobalColors },
});

const tokens = createTokens({
  globals: { ...Globals, ...GlobalSizes.aggregator },
  desktop: { ...Desktop, ...DesktopSizes.aggregator, typography: DesktopTypography },
  mobile: { ...Mobile, ...MobileSizes.aggregator, typography: MobileTypography },
  tablet: { ...Tablet, ...TabletSizes.aggregator, typography: TabletTypography },

  typography: MobileTypography,

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
const tamaguiConfig = createTamagui({
  ...defaultConfig,
  themes,
  tokens: {
    ...defaultConfig.tokens,
    ...tokens,
    colors,
  },
});

export default tamaguiConfig;
