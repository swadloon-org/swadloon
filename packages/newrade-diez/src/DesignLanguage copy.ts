import * as prefabs from '@diez/prefabs';
import * as coreDesignSystem from 'core-design-system';
import { Margin } from './Margin';
import { nrDesignSystemFonts } from './designs/NrDesignSystem.figma';
import { prefab } from '@diez/engine';

/**
 * You can collect anything inside a Diez component. Design tokens specified as
 * properties will be made available in the SDKs transpiled with Diez.
 */
const colors = {
  white: prefabs.Color.hex('#FFFFFF'),
  black: prefabs.Color.hex('#000010'),
  purple: prefabs.Color.rgb(86, 35, 238),
  darkPurple: prefabs.Color.rgb(22, 11, 54),
};

/**
 * You can reference properties from other components.
 */
const palette = {
  contentBackground: colors.white,
  text: colors.black,
  caption: colors.purple,
  headerBackground: prefabs.LinearGradient.make(prefabs.Toward.Bottom, colors.darkPurple, colors.black),
};

/**
 * All of rich language features of TypeScript are at your disposal; for example,
 * you can define an object to keep track of your fonts.
 */
const Fonts = {
  Main: prefabs.Font.fromFile('assets/NrDesignSystem.figma.contents/fonts/Gilroy-Regular.otf'),
};

const baseSize = 9;

const testThemeSizingScale: coreDesignSystem.SizingScale = {
  baseSize,
  ratio: 1.618,
  steps: {
    [coreDesignSystem.SCALE_STEP_NAME.X1]: {
      name: coreDesignSystem.SCALE_STEP_NAME.X1,
      size: 9,
    },
    [coreDesignSystem.SCALE_STEP_NAME.X2]: {
      name: coreDesignSystem.SCALE_STEP_NAME.X2,
      size: 13,
    },
    [coreDesignSystem.SCALE_STEP_NAME.X3]: {
      name: coreDesignSystem.SCALE_STEP_NAME.X3,
      size: 21.03,
    },
    [coreDesignSystem.SCALE_STEP_NAME.X4]: {
      name: coreDesignSystem.SCALE_STEP_NAME.X4,
      size: 34.03,
    },
    [coreDesignSystem.SCALE_STEP_NAME.X5]: {
      name: coreDesignSystem.SCALE_STEP_NAME.X5,
      size: 55.07,
    },
  },
};

const gilroyTypographicScale: coreDesignSystem.TypographicScale = {
  baseSize: testThemeSizingScale.baseSize,
  baseFontSize: 12,
  ratio: testThemeSizingScale.ratio,
  steps: {
    [coreDesignSystem.SCALE_STEP_NAME.X1]: {
      name: coreDesignSystem.SCALE_STEP_NAME.X1,
      size: 12.0,
    },
    [coreDesignSystem.SCALE_STEP_NAME.X2]: {
      name: coreDesignSystem.SCALE_STEP_NAME.X2,
      size: 18.0,
    },
    [coreDesignSystem.SCALE_STEP_NAME.X3]: {
      name: coreDesignSystem.SCALE_STEP_NAME.X3,
      size: 29.12,
    },
    [coreDesignSystem.SCALE_STEP_NAME.X4]: {
      name: coreDesignSystem.SCALE_STEP_NAME.X4,
      size: 47.12,
    },
    [coreDesignSystem.SCALE_STEP_NAME.X5]: {
      name: coreDesignSystem.SCALE_STEP_NAME.X5,
      size: 76.24,
    },
  },
};

// does not work since a prefab is defined under headings

interface TestTypographyProps {
  prop: number;
  headings: prefabs.Typograph;
}

export class TestTypography extends prefab<TestTypographyProps>() {
  defaults = {
    prop: 2,
    headings: new prefabs.Typograph({
      font: nrDesignSystemFonts.Gilroy.Regular,
      fontSize: 24,
      color: palette.text,
    }),
  };
}

const headings = {
  heading1: new prefabs.Typograph({
    font: nrDesignSystemFonts.Gilroy.Regular,
    fontSize: 24,
    color: palette.text,
  }),
};

const test = {
  headings,
};

/**
 * Typographs encapsulate type styles with support for a specific font, font size,
 * and color. More typograph properties are coming soon.
 */
const typography = {
  headings: test,
};
// heading2: {
//   name: 'test design system',
//   variant: 'light',
//   sizingScale: testThemeSizingScale,
//   typography: {
//     [TYPOGRAPHIC_STYLE.SANS]: {
//       headings: {
//         heading1: new Typograph({
//           font: nrDesignSystemFonts.Gilroy.Regular,
//           fontSize: 24,
//           color: palette.text,
//         }),
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
// },
// };

/**
 * In addition to colors and typography, you can also collect other types of
 * design language primitives in components as well — such as images, icons &
 * animations.
 */
// const images = {
//   logo: Image.responsive('assets/logo.png', 52, 48),
//   masthead: Image.responsive('assets/masthead.png', 208, 88),
// };

/**
 * You can even collect your own custom components.
 */
const layoutValues = {
  spacingSmall: 5,
  spacingMedium: 25,
  spacingLarge: 40,
  contentMargin: new Margin({
    top: 40,
    left: 10,
    right: 10,
    bottom: 10,
  }),
};

/**
 * You can also define strings.
 */
const strings = {
  title: 'Diez',
  caption: 'Keep your designs in sync with code',
  helper:
    'Modify the contents of “src/DesignLanguage.ts” (relative to the root of the Diez project) to see changes to the design language in real time.',
};

const shadows = {
  logo: new prefabs.DropShadow({
    offset: prefabs.Point2D.make(0, 1),
    radius: 16,
    color: colors.black.fade(0.59),
  }),
};

/**
 * Note how this component is exported from `index.ts`. Diez compiles these
 * exported components for your apps' codebases.
 *
 * For example:
 *   - If you run `yarn start web` or `npm run start web`, Diez will create a Node package called
 *     `diez-newrade-diez-web`. Look for `App.jsx` inside `examples/web` to see
 *     how you can use Diez in a web codebase.
 *   - If you run `yarn start ios` or `npm run start ios`, Diez will create a CocoaPods dependency
 *     called `DiezNewradeDiez`. Look for `ViewController.swift` inside
 *     `examples/ios` to see how you can use Diez in an iOS codebase.
 *   - If you run `yarn start android` or `npm run start android`, Diez will create an Android library.
 *     Look for `MainActivity.kt` inside `examples/android` to see how you can
 *     use Diez in an Android codebase.
 *  - If you run `yarn start web` or `npm run start web`, Diez will create a Web App with your tokens.
 */
export const DesignLanguage = {
  palette,
  colors,
  typography,
  // images,
  layoutValues,
  strings,
  shadows,
};
