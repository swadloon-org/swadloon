import { Color } from '../primitives/color';

/**
 * Every color defined in the system.
 */
export interface Colors<T = Color> {
  primary100: T;
  primary300: T;
  primary500: T;
  primary700: T;
  primary1000: T;

  accent100: T;
  accent300: T;
  accent500: T;
  accent700: T;
  accent1000: T;

  greyscaleTransparent: T;
  greyscale0: T;
  greyscale0Reversed: T;
  greyscale100: T;
  greyscale100Reversed: T;
  greyscale150: T;
  greyscale200: T;
  greyscale200Reversed: T;
  greyscale300: T;
  greyscale400: T;
  greyscale500: T;
  greyscale600: T;
  greyscale700: T;
  greyscale800: T;
  greyscale900: T;
  greyscale1000: T;

  effectTransparentLight: T;
  effectTransparentMedium: T;
  effectTransparentHeavy: T;

  utilityGreen100: T;
  utilityGreen300: T;
  utilityGreen500: T;
  utilityGreen700: T;
  utilityGreen1000: T;

  utilityYellow100: T;
  utilityYellow300: T;
  utilityYellow500: T;
  utilityYellow700: T;
  utilityYellow1000: T;

  utilityRed100: T;
  utilityRed300: T;
  utilityRed500: T;
  utilityRed700: T;
  utilityRed1000: T;
}
