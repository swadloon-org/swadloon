import * as coreDesignSystem from 'core-design-system';
import { DesignSystem } from 'core-design-system';
import { Color, Typograph } from '@diez/prefabs';

import { mirDesignSystemTokens, mirDesignSystemFonts } from './designs/MirDesignSystem.figma';

const name = 'mir';

const typography = mirDesignSystemTokens.typography;
const shadows = mirDesignSystemTokens.shadows;
const colors = mirDesignSystemTokens.colors;

const lightThemeColors = new coreDesignSystem.Colors({
  primary100: mirDesignSystemTokens.colors.mirLightPrimary100,
  primary300: mirDesignSystemTokens.colors.mirLightPrimary300,
  primary500: mirDesignSystemTokens.colors.mirLightPrimary500,
  primary700: mirDesignSystemTokens.colors.mirLightPrimary700,
  primary1000: mirDesignSystemTokens.colors.mirLightPrimary1000,
  accent100: mirDesignSystemTokens.colors.mirLightAccent1100,
  accent300: mirDesignSystemTokens.colors.mirLightAccent1300,
  accent500: mirDesignSystemTokens.colors.mirLightAccent1500,
  accent700: mirDesignSystemTokens.colors.mirLightAccent1700,
  accent1000: mirDesignSystemTokens.colors.mirLightAccent11000,
  greyscaleTransparent: mirDesignSystemTokens.colors.mirLightGreyscaleTransparent,
  greyscaleInverted: mirDesignSystemTokens.colors.mirLightGreyscaleInverted,
  greyscale0: mirDesignSystemTokens.colors.mirLightGreyscale0,
  greyscale100: mirDesignSystemTokens.colors.mirLightGreyscale100,
  greyscale100White: mirDesignSystemTokens.colors.mirLightGreyscale100White,
  greyscale150: mirDesignSystemTokens.colors.mirLightGreyscale150,
  greyscale200: mirDesignSystemTokens.colors.mirLightGreyscale200,
  greyscale200White: mirDesignSystemTokens.colors.mirLightGreyscale200White,
  greyscale300: mirDesignSystemTokens.colors.mirLightGreyscale300,
  greyscale400: mirDesignSystemTokens.colors.mirLightGreyscale400,
  greyscale500: mirDesignSystemTokens.colors.mirLightGreyscale500,
  greyscale600: mirDesignSystemTokens.colors.mirLightGreyscale600,
  greyscale700: mirDesignSystemTokens.colors.mirLightGreyscale700,
  greyscale800: mirDesignSystemTokens.colors.mirLightGreyscale800,
  greyscale900: mirDesignSystemTokens.colors.mirLightGreyscale900,
  greyscale1000: mirDesignSystemTokens.colors.mirLightGreyscale1000,
});

const lightTheme = new coreDesignSystem.DesignSystemTheme({
  colors: lightThemeColors,
});

const themes = new coreDesignSystem.DesignSystemThemes({
  light: lightTheme,
});

const ds = new DesignSystem({
  themes,
});

export const DesignLanguage = {
  name,
  // ds, // not working
  colors,
  typography,
  shadows,
};
