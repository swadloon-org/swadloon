import { SIZING, SizingSteps, VIEWPORT, createSizingStep, SizeCSSVarNames, Sizing } from 'core-design-system';

export const DEFAULT_BASE_FONT_SIZE = 9;
export const DEFAULT_BASE_FONT_SIZE_PX = `${DEFAULT_BASE_FONT_SIZE}px`;

export const DEFAULT_SCALING_RATIO = 1.618;

export const DEFAULT_SIZES_CSS_VAR_NAMES: SizeCSSVarNames = {
  [SIZING.X1]: '--sizing-x1',
  [SIZING.X2]: '--sizing-x2',
  [SIZING.X3]: '--sizing-x3',
  [SIZING.X4]: '--sizing-x4',
  [SIZING.X5]: '--sizing-x5',
  [SIZING.X6]: '--sizing-x6',
  [SIZING.X7]: '--sizing-x7',
  [SIZING.X8]: '--sizing-x8',
  [SIZING.X9]: '--sizing-x9',
  [SIZING.X10]: '--sizing-x10',
};

const sizingStepMobile = {
  [SIZING.X1]: createSizingStep({
    value: 9,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.X2]: createSizingStep({
    value: 13,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.X3]: createSizingStep({
    value: 21,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.X4]: createSizingStep({
    value: 34,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.X5]: createSizingStep({
    value: 55,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.X6]: createSizingStep({
    value: 89,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.X7]: createSizingStep({
    value: 144,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.X8]: createSizingStep({
    value: 233,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.X9]: createSizingStep({
    value: 377,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.X10]: createSizingStep({
    value: 610,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
};

export const DEFAULT_SIZING_STEPS: SizingSteps = {
  [VIEWPORT.MOBILE]: sizingStepMobile,
  [VIEWPORT.TABLET]: sizingStepMobile,
  [VIEWPORT.DESKTOP]: sizingStepMobile,
};

export const DEFAULT_SIZING: Sizing = {
  baseFontSize: DEFAULT_BASE_FONT_SIZE,
  baseFontSizePx: DEFAULT_BASE_FONT_SIZE_PX,
  ratio: DEFAULT_SCALING_RATIO,
  sizeCSSVarNames: DEFAULT_SIZES_CSS_VAR_NAMES,
  sizingSteps: DEFAULT_SIZING_STEPS,
};
