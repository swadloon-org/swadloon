import { DesignSystem } from '@newrade/core-design-system';
import { getCSSColor } from '../utilities/colors.utilities';
import { CSSDesignSystem } from './css-design-system';
import { defaultColors } from './default-colors';

export const defaultTheme: Partial<DesignSystem> = {
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
          textColor: defaultColors.grey['500'],
          iconColor: defaultColors.grey['500'],
          backgroundColor: defaultColors.grey['500'],
        },
        primaryReversed: {
          textColor: defaultColors.grey['500'],
          iconColor: defaultColors.grey['500'],
        },
        secondary: {
          textColor: defaultColors.grey['500'],
          iconColor: defaultColors.grey['500'],
        },
        secondaryReversed: {
          textColor: defaultColors.grey['500'],
          iconColor: defaultColors.grey['500'],
        },
        tertiary: {
          textColor: defaultColors.grey['500'],
          iconColor: defaultColors.grey['500'],
        },
        tertiaryReversed: {
          textColor: defaultColors.grey['500'],
          iconColor: defaultColors.grey['500'],
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

export const defaultCSSTheme: Partial<CSSDesignSystem> = {
  name: 'core-react-ui',
  themes: 'light',
  components: {
    buttons: {
      variants: {
        primary: {
          textColor: getCSSColor(defaultColors.grey['500']),
          iconColor: getCSSColor(defaultColors.grey['500']),
          backgroundColor: getCSSColor(defaultColors.grey['500']),
        },
        primaryReversed: {
          textColor: getCSSColor(defaultColors.grey['500']),
          iconColor: getCSSColor(defaultColors.grey['500']),
        },
        secondary: {
          textColor: getCSSColor(defaultColors.grey['500']),
          iconColor: getCSSColor(defaultColors.grey['500']),
        },
        secondaryReversed: {
          textColor: getCSSColor(defaultColors.grey['500']),
          iconColor: getCSSColor(defaultColors.grey['500']),
        },
        tertiary: {
          textColor: getCSSColor(defaultColors.grey['500']),
          iconColor: getCSSColor(defaultColors.grey['500']),
        },
        tertiaryReversed: {
          textColor: getCSSColor(defaultColors.grey['500']),
          iconColor: getCSSColor(defaultColors.grey['500']),
        },
      },
      sizes: {
        large: {
          padding: {
            default: `10px`,
          },
          border: {
            default: `1px solid red`,
          },
        },
        medium: {
          padding: {
            default: `10px`,
          },
          border: {
            default: `1px solid red`,
          },
        },
        small: {
          padding: {
            default: `10px`,
          },
          border: {
            default: `1px solid red`,
          },
        },
      },
    },
  },
};
