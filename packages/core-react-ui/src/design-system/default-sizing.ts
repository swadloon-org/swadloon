import { SIZE, Sizing, SizingSteps, SizingVarNames, VIEWPORT } from '@newrade/core-design-system';

export const DEFAULT_BASE_FONT_SIZE = 9;
export const DEFAULT_BASE_FONT_SIZE_PX = `${DEFAULT_BASE_FONT_SIZE}px`;

export const DEFAULT_SCALING_RATIO = 1.618;

export const DEFAULT_SIZES_CSS_VAR_NAMES: SizingVarNames = {
  [SIZE.x0]: '--sizing-x0',
  [SIZE.x1]: '--sizing-x1',
  [SIZE.x2]: '--sizing-x2',
  [SIZE.x3]: '--sizing-x3',
  [SIZE.x4]: '--sizing-x4',
  [SIZE.x5]: '--sizing-x5',
  [SIZE.x6]: '--sizing-x6',
  [SIZE.x7]: '--sizing-x7',
  [SIZE.x8]: '--sizing-x8',
  [SIZE.x9]: '--sizing-x9',
  [SIZE.x10]: '--sizing-x10',
};

export const DEFAULT_SIZES_CSS_VAR: SizingVarNames = {
  [SIZE.x0]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x0})`,
  [SIZE.x1]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x1})`,
  [SIZE.x2]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x2})`,
  [SIZE.x3]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x3})`,
  [SIZE.x4]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x4})`,
  [SIZE.x5]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x5})`,
  [SIZE.x6]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x6})`,
  [SIZE.x7]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x7})`,
  [SIZE.x8]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x8})`,
  [SIZE.x9]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x9})`,
  [SIZE.x10]: `var(${DEFAULT_SIZES_CSS_VAR_NAMES.x10})`,
};

const sizingStepMobile = {
  [SIZE.x0]: 9,
  [SIZE.x1]: 9,
  [SIZE.x2]: 13,
  [SIZE.x3]: 21,
  [SIZE.x4]: 34,
  [SIZE.x5]: 55,
  [SIZE.x6]: 89,
  [SIZE.x7]: 44,
  [SIZE.x8]: 33,
  [SIZE.x9]: 77,
  [SIZE.x10]: 10,
};

export const DEFAULT_SIZING_STEPS: SizingSteps = {
  [VIEWPORT.mobile]: sizingStepMobile,
  [VIEWPORT.tablet]: sizingStepMobile,
  [VIEWPORT.desktop]: sizingStepMobile,
};

export const defaultSizizng: Sizing = {
  baseFontSize: DEFAULT_BASE_FONT_SIZE,
  ratio: DEFAULT_SCALING_RATIO,
  varNames: DEFAULT_SIZES_CSS_VAR_NAMES,
  var: DEFAULT_SIZES_CSS_VAR,
  sizes: DEFAULT_SIZING_STEPS,
};
