import { Color } from 'csstype';

/**
 * Every color defined in the system.
 */
export interface Colors {
  primary100: Color;
  primary300: Color;
  primary500: Color;
  primary700: Color;
  primary1000: Color;

  accent100: Color;
  accent300: Color;
  accent500: Color;
  accent700: Color;
  accent1000: Color;

  greyscaleTransparent: Color;
  greyscale0: Color;
  greyscale0Reversed: Color;
  greyscale100: Color;
  greyscale100Reversed: Color;
  greyscale150: Color;
  greyscale200: Color;
  greyscale200Reversed: Color;
  greyscale300: Color;
  greyscale400: Color;
  greyscale500: Color;
  greyscale600: Color;
  greyscale700: Color;
  greyscale800: Color;
  greyscale900: Color;
  greyscale1000: Color;

  effectTransparentLight: Color;
  effectTransparentMedium: Color;
  effectTransparentHeavy: Color;

  utilityGreen100: Color;
  utilityGreen300: Color;
  utilityGreen500: Color;
  utilityGreen700: Color;
  utilityGreen1000: Color;
  utilityYellow100: Color;
  utilityYellow300: Color;
  utilityYellow500: Color;
  utilityYellow700: Color;
  utilityYellow1000: Color;
  utilityRed100: Color;
  utilityRed300: Color;
  utilityRed500: Color;
  utilityRed700: Color;
  utilityRed1000: Color;
}

/**
 * Contextual use of certain colors (text, action, state, etc).
 */
export interface ColorIntents {
  /**
   * TODO
   */
  accessibilityColor?: Color;

  primary: Color;
  primaryReversed: Color;
  secondary: Color;
  secondaryReversed: Color;
  primaryText: Color;
  primaryTextReversed: Color;
  secondaryText: Color;
  secondaryTextReversed: Color;
  tertiaryText: Color;
  tertiaryTextReversed: Color;
  successText: Color;
  successAction: Color;
  successBackground: Color;
  warningText: Color;
  warningAction: Color;
  warningBackground: Color;
  dangerText: Color;
  dangerAction: Color;
  dangerBackground: Color;
  background0: Color;
  background1: Color;
  background2: Color;
}
