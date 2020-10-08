import { ColorIntents, Colors } from '@newrade/core-design-system';
import { createDefaultColorIntents } from '../utilities/utilities';

export const defaultColors: Colors = {
  primary100: { h: 222, s: 50, l: 50 },
  primary300: { h: 222, s: 50, l: 50 },
  primary500: { h: 222, s: 50, l: 50 },
  primary700: { h: 222, s: 50, l: 50 },
  primary1000: { h: 222, s: 50, l: 50 },

  accent100: { h: 222, s: 50, l: 50 },
  accent300: { h: 222, s: 50, l: 50 },
  accent500: { h: 222, s: 50, l: 50 },
  accent700: { h: 222, s: 50, l: 50 },
  accent1000: { h: 222, s: 50, l: 50 },

  greyscaleTransparent: { h: 222, s: 50, l: 50 },
  greyscale0: { h: 222, s: 50, l: 50 },
  greyscale0Reversed: { h: 222, s: 50, l: 50 },
  greyscale100: { h: 222, s: 50, l: 50 },
  greyscale100Reversed: { h: 222, s: 50, l: 50 },
  greyscale150: { h: 222, s: 50, l: 50 },
  greyscale200: { h: 222, s: 50, l: 50 },
  greyscale200Reversed: { h: 222, s: 50, l: 50 },
  greyscale300: { h: 222, s: 50, l: 50 },
  greyscale400: { h: 222, s: 50, l: 50 },
  greyscale500: { h: 222, s: 50, l: 50 },
  greyscale600: { h: 222, s: 50, l: 50 },
  greyscale700: { h: 222, s: 50, l: 50 },
  greyscale800: { h: 222, s: 50, l: 50 },
  greyscale900: { h: 222, s: 50, l: 50 },
  greyscale1000: { h: 222, s: 50, l: 50 },

  effectTransparentLight: { h: 222, s: 50, l: 50 },
  effectTransparentMedium: { h: 222, s: 50, l: 50 },
  effectTransparentHeavy: { h: 222, s: 50, l: 50 },

  utilityGreen100: { h: 222, s: 50, l: 50 },
  utilityGreen300: { h: 222, s: 50, l: 50 },
  utilityGreen500: { h: 222, s: 50, l: 50 },
  utilityGreen700: { h: 222, s: 50, l: 50 },
  utilityGreen1000: { h: 222, s: 50, l: 50 },

  utilityYellow100: { h: 222, s: 50, l: 50 },
  utilityYellow300: { h: 222, s: 50, l: 50 },
  utilityYellow500: { h: 222, s: 50, l: 50 },
  utilityYellow700: { h: 222, s: 50, l: 50 },
  utilityYellow1000: { h: 222, s: 50, l: 50 },

  utilityRed100: { h: 222, s: 50, l: 50 },
  utilityRed300: { h: 222, s: 50, l: 50 },
  utilityRed500: { h: 222, s: 50, l: 50 },
  utilityRed700: { h: 222, s: 50, l: 50 },
  utilityRed1000: { h: 222, s: 50, l: 50 },
};

export const defaultColorIntents: ColorIntents = createDefaultColorIntents(defaultColors);
