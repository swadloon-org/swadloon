import {
  CSS_SYSTEM_SANS_FONTS,
  HEADING_NAME,
  TYPOGRAPHIC_STYLE,
  SCALE_STEP_NAME,
  SizingScale,
  TypographicScale,
  DesignSystem,
} from 'core-design-system';

const baseSize = 9;

const testThemeSizingScale: SizingScale = {
  baseSize,
  ratio: 1.618,
  steps: {
    [SCALE_STEP_NAME.X1]: {
      name: SCALE_STEP_NAME.X1,
      size: 9,
    },
    [SCALE_STEP_NAME.X2]: {
      name: SCALE_STEP_NAME.X2,
      size: 13,
    },
    [SCALE_STEP_NAME.X3]: {
      name: SCALE_STEP_NAME.X3,
      size: 21.03,
    },
    [SCALE_STEP_NAME.X4]: {
      name: SCALE_STEP_NAME.X4,
      size: 34.03,
    },
    [SCALE_STEP_NAME.X5]: {
      name: SCALE_STEP_NAME.X5,
      size: 55.07,
    },
  },
};

const gilroyTypographicScale: TypographicScale = {
  baseSize: testThemeSizingScale.baseSize,
  baseFontSize: 12,
  ratio: testThemeSizingScale.ratio,
  steps: {
    [SCALE_STEP_NAME.X1]: {
      name: SCALE_STEP_NAME.X1,
      size: 12.0,
    },
    [SCALE_STEP_NAME.X2]: {
      name: SCALE_STEP_NAME.X2,
      size: 18.0,
    },
    [SCALE_STEP_NAME.X3]: {
      name: SCALE_STEP_NAME.X3,
      size: 29.12,
    },
    [SCALE_STEP_NAME.X4]: {
      name: SCALE_STEP_NAME.X4,
      size: 47.12,
    },
    [SCALE_STEP_NAME.X5]: {
      name: SCALE_STEP_NAME.X5,
      size: 76.24,
    },
  },
};

// export const testThemeLight: DesignSystem = {
//   name: 'test design system',
//   variant: 'light',
//   sizingScale: testThemeSizingScale,
//   typography: {
//     [TYPOGRAPHIC_STYLE.SANS]: {
//       headings: {
//         [HEADING_NAME.H1]: {
//           fontFamily: `Gilroy, ${CSS_SYSTEM_SANS_FONTS}`,
//           fontSize: gilroyTypographicScale.steps.X5.size,
//           lineHeight: 125 / 100,
//           letterSpacing: 0,
//           paragraphSpacing: 29.94,
//         },
//       },
//     },
//   },
// };
