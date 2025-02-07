import { createTamagui, createTokens, createThemes } from 'tamagui';

// Import Colors
import * as Light from '../Light/tokens';
import * as Dark from '../Dark/tokens';
import * as Dire from '../DIRE/tokens';

// Define all acceptable variable token names
const colors = createTokens({
  light: { ...Light, Dire },
  dark: { ...Dark, Dire },
});

// Create themes based on the color tokens
const themes = createThemes({
  light: { ...colors.light },
  dark: { ...colors.dark },
});

// Create Tamagui config
const tamaguiConfig = createTamagui({
  themes,
  tokens: {
    color: colors,
  },
});

export default tamaguiConfig;
