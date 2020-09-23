import { SIZING, SizingSteps, createSizingStep, SizeCSSVarNames, Sizing, VIEWPORT } from '@newrade/core-design-system';

export const DEFAULT_BASE_FONT_SIZE = 9;
export const DEFAULT_BASE_FONT_SIZE_PX = `${DEFAULT_BASE_FONT_SIZE}px`;

export const DEFAULT_SCALING_RATIO = 1.618;

export const DEFAULT_SIZES_CSS_VAR_NAMES: SizeCSSVarNames = {
  [SIZING.x0]: '--sizing-x0',
  [SIZING.x1]: '--sizing-x1',
  [SIZING.x2]: '--sizing-x2',
  [SIZING.x3]: '--sizing-x3',
  [SIZING.x4]: '--sizing-x4',
  [SIZING.x5]: '--sizing-x5',
  [SIZING.x6]: '--sizing-x6',
  [SIZING.x7]: '--sizing-x7',
  [SIZING.x8]: '--sizing-x8',
  [SIZING.x9]: '--sizing-x9',
  [SIZING.x10]: '--sizing-x10',
};

export const DEFAULT_SIZES_CSS_VAR: SizeCSSVarNames = {
  [SIZING.x0]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x0})`,
  [SIZING.x1]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x1})`,
  [SIZING.x2]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x2})`,
  [SIZING.x3]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x3})`,
  [SIZING.x4]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x4})`,
  [SIZING.x5]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x5})`,
  [SIZING.x6]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x6})`,
  [SIZING.x7]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x7})`,
  [SIZING.x8]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x8})`,
  [SIZING.x9]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x9})`,
  [SIZING.x10]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x10})`,
};

const sizingStepMobile = {
  [SIZING.x0]: createSizingStep({
    value: 9,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.x1]: createSizingStep({
    value: 9,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.x2]: createSizingStep({
    value: 13,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.x3]: createSizingStep({
    value: 21,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.x4]: createSizingStep({
    value: 34,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.x5]: createSizingStep({
    value: 55,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.x6]: createSizingStep({
    value: 89,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.x7]: createSizingStep({
    value: 144,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.x8]: createSizingStep({
    value: 233,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.x9]: createSizingStep({
    value: 377,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
  [SIZING.x10]: createSizingStep({
    value: 610,
    baseFontSize: DEFAULT_BASE_FONT_SIZE,
  }),
};

export const DEFAULT_SIZING_STEPS: SizingSteps = {
  [VIEWPORT.mobile]: sizingStepMobile,
  [VIEWPORT.tablet]: sizingStepMobile,
  [VIEWPORT.desktop]: sizingStepMobile,
};

export const DEFAULT_SIZING: Sizing = {
  baseFontSize: DEFAULT_BASE_FONT_SIZE,
  baseFontSizePx: DEFAULT_BASE_FONT_SIZE_PX,
  ratio: DEFAULT_SCALING_RATIO,
  sizeCSSVarNames: DEFAULT_SIZES_CSS_VAR_NAMES,
  sizes: DEFAULT_SIZES_CSS_VAR,
  sizingSteps: DEFAULT_SIZING_STEPS,
};
