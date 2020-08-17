import { Colors, ColorIntents, createDefaultColorIntents } from 'core-design-system';

export const colors: Colors = {
  primary100: `rgba(205, 214, 251, 1)`,
  primary300: `rgba(130, 153, 246, 1)`,
  primary500: `rgba(55, 91, 240, 1)`,
  primary700: `rgba(15, 52, 206, 1)`,
  primary1000: `rgba(5, 17, 69, 1)`,

  accent100: `rgba(254, 246, 229, 1)`,
  accent300: `rgba(253, 227, 176, 1)`,
  accent500: `rgba(250, 180, 45, 1)`,
  accent700: `rgba(180, 120, 4, 1)`,
  accent1000: `rgba(108, 72, 3, 1)`,

  greyscaleTransparent: `rgba(255, 255, 255, 0)`,
  greyscale0: `rgba(255, 255, 255, 1)`,
  greyscale100Reversed: `rgba(255, 255, 255, 1)`,
  greyscale100: `rgba(240, 242, 246, 1)`,
  greyscale150: `rgba(228, 231, 236, 1)`,
  greyscale200: `rgba(232, 236, 242, 1)`,
  greyscale200Reversed: `rgba(255, 255, 255, 1)`,
  greyscale300: `rgba(214, 219, 225, 1)`,
  greyscale400: `rgba(184, 193, 203, 1)`,
  greyscale500: `rgba(149, 162, 177, 1)`,
  greyscale600: `rgba(122, 124, 146, 1)`,
  greyscale700: `rgba(94, 96, 115, 1)`,
  greyscale800: `rgba(67, 68, 81, 1)`,
  greyscale900: `rgba(39, 40, 48, 1)`,
  greyscale1000: `rgba(14, 14, 17, 1)`,

  effectTransparentLight: `rgba(39, 40, 48, 0.22)`,
  effectTransparentMedium: `rgba(39, 40, 48, 0.47)`,
  effectTransparentHeavy: `rgba(39, 40, 48, 0.63)`,

  utilityGreen100: `rgba(228, 252, 228, 1)`,
  utilityGreen1000: `rgba(12, 90, 12, 1)`,
  utilityGreen300: `rgba(149, 241, 149, 1)`,
  utilityGreen500: `rgba(43, 227, 43, 1)`,
  utilityGreen700: `rgba(23, 179, 23, 1)`,
  utilityRed100: `rgba(253, 237, 237, 1)`,
  utilityRed1000: `rgba(90, 12, 12, 1)`,
  utilityRed300: `rgba(241, 149, 149, 1)`,
  utilityRed500: `rgba(227, 43, 43, 1)`,
  utilityRed700: `rgba(150, 19, 19, 1)`,
  utilityYellow100: `rgba(253, 249, 227, 1)`,
  utilityYellow1000: `rgba(62, 55, 5, 1)`,
  utilityYellow300: `rgba(243, 226, 117, 1)`,
  utilityYellow500: `rgba(236, 209, 34, 1)`,
  utilityYellow700: `rgba(155, 137, 14, 1)`,
};

export const colorIntents: ColorIntents = createDefaultColorIntents(colors);
