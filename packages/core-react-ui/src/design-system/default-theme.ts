import { DesignSystem } from '@newrade/core-design-system';
import { getCSSColor } from '../utilities/colors.utilities';
import { CSSDesignSystem } from './css-design-system';
import { defaultColors } from './default-colors';

const defaultTheme: Partial<DesignSystem> = {
  name: 'core-react-ui',
  themes: 'light',
  // typography: {
  //   fonts: {
  //     serif: defaultSerifFont,
  //     sans: defaultSansFont,
  //     sansAlternate: defaultSansAlternateFont,
  //     monospace: defaultMonospaceFont,
  //   },
  //   titles: {
  //     mobile: {
  //       h1: {
  //         serif: {
  //           font: defaultSerifFont,
  //           fontWeight: 400,
  //           capHeight: 55,
  //           lineGap: 19,
  //         },
  //       },
  //       h2: {
  //         serif: {
  //           font: defaultSerifFont,
  //           fontWeight: 400,
  //           capHeight: 55,
  //           lineGap: 19,
  //         },
  //       },
  //     },
  //     tablet: {
  //       h1: {
  //         serif: {
  //           font: defaultSerifFont,
  //           fontWeight: 400,
  //           capHeight: 55,
  //           lineGap: 19,
  //         },
  //       },
  //       h2: {
  //         serif: {
  //           font: defaultSerifFont,
  //           fontWeight: 400,
  //           capHeight: 55,
  //           lineGap: 19,
  //         },
  //       },
  //     },
  //     desktop: {
  //       h1: {
  //         serif: {
  //           font: defaultSerifFont,
  //           fontWeight: 400,
  //           capHeight: 55,
  //           lineGap: 19,
  //         },
  //       },
  //       h2: {
  //         serif: {
  //           font: defaultSerifFont,
  //           fontWeight: 400,
  //           capHeight: 55,
  //           lineGap: 19,
  //         },
  //       },
  //     },
  //   },
  // },
  components: {
    buttons: {
      variants: {
        primary: {
          textColor: defaultColors.greyscale0Reversed,
          iconColor: defaultColors.greyscale0Reversed,
          backgroundColor: defaultColors.primary500,
        },
        primaryReversed: {
          textColor: defaultColors.greyscale0,
          iconColor: defaultColors.greyscale0,
        },
        secondary: {
          textColor: defaultColors.greyscale0,
          iconColor: defaultColors.greyscale0,
        },
        secondaryReversed: {
          textColor: defaultColors.greyscale0,
          iconColor: defaultColors.greyscale0,
        },
        tertiary: {
          textColor: defaultColors.greyscale0,
          iconColor: defaultColors.greyscale0,
        },
        tertiaryReversed: {
          textColor: defaultColors.greyscale0,
          iconColor: defaultColors.greyscale0,
        },
      },
      sizes: {
        large: {
          padding: {
            default: 10,
          },
          border: {
            default: {
              borderWidth: 1,
            },
          },
        },
        medium: {
          padding: {
            default: 10,
          },
          border: {
            default: {
              borderWidth: 1,
            },
          },
        },
        small: {
          padding: {
            default: 10,
          },
          border: {
            default: {
              borderWidth: 1,
            },
          },
        },
      },
    },
  },
};

const defaultCSSTheme: Partial<CSSDesignSystem> = {
  name: 'core-react-ui',
  themes: 'light',
  components: {
    buttons: {
      variants: {
        primary: {
          textColor: getCSSColor(defaultColors.greyscale0Reversed),
          iconColor: defaultColors.greyscale0Reversed,
          backgroundColor: defaultColors.primary500,
        },
        primaryReversed: {
          textColor: defaultColors.greyscale0,
          iconColor: defaultColors.greyscale0,
        },
        secondary: {
          textColor: defaultColors.greyscale0,
          iconColor: defaultColors.greyscale0,
        },
        secondaryReversed: {
          textColor: defaultColors.greyscale0,
          iconColor: defaultColors.greyscale0,
        },
        tertiary: {
          textColor: defaultColors.greyscale0,
          iconColor: defaultColors.greyscale0,
        },
        tertiaryReversed: {
          textColor: defaultColors.greyscale0,
          iconColor: defaultColors.greyscale0,
        },
      },
      sizes: {
        large: {
          padding: {
            default: 10,
          },
          border: {
            default: {
              borderWidth: 1,
            },
          },
        },
        medium: {
          padding: {
            default: 10,
          },
          border: {
            default: {
              borderWidth: 1,
            },
          },
        },
        small: {
          padding: {
            default: 10,
          },
          border: {
            default: {
              borderWidth: 1,
            },
          },
        },
      },
    },
  },
};
