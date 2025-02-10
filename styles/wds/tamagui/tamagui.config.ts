import { createTamagui, createTokens } from 'tamagui';
import { defaultConfig } from '@tamagui/config/v4';
import { themes } from './themes';

// Import Colors
import * as Light from './assets/Light/tokens';
import * as Dark from './assets/Dark/tokens';
import * as Dire from './assets/DIRE/tokens';

// Define all acceptable variable token names
const colors = createTokens({
  light: { ...Light, Dire },
  dark: { ...Dark, Dire },
});

// Create Tamagui config
const tamaguiConfig = createTamagui({
  ...defaultConfig,
  themes,
  tokens: {
    ...defaultConfig.tokens,
    color: colors,
  },
});

export default tamaguiConfig;
