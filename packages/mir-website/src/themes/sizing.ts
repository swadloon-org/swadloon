import { createSizingStep, Sizing, SIZING, SizingSteps, VIEWPORT } from 'core-design-system';
import { DEFAULT_BASE_FONT_SIZE, DEFAULT_SCALING_RATIO, DEFAULT_SIZES_CSS_VAR_NAMES } from 'core-react-ui';

export const BASE_FONT_SIZE = 9;
export const BASE_FONT_SIZE_PX = `${DEFAULT_BASE_FONT_SIZE}px`;

export const sizingStepMobile = {
  [SIZING.X0]: createSizingStep({
    value: 7,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X1]: createSizingStep({
    value: 9,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X2]: createSizingStep({
    value: 12,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X3]: createSizingStep({
    value: 16,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X4]: createSizingStep({
    value: 21,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X5]: createSizingStep({
    value: 30,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X6]: createSizingStep({
    value: 45,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X7]: createSizingStep({
    value: 73,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X8]: createSizingStep({
    value: 118,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X9]: createSizingStep({
    value: 191,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X10]: createSizingStep({
    value: 310,
    baseFontSize: BASE_FONT_SIZE,
  }),
};

export const sizingStepDesktop = {
  [SIZING.X0]: createSizingStep({
    value: 8,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X1]: createSizingStep({
    value: 10,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X2]: createSizingStep({
    value: 13,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X3]: createSizingStep({
    value: 21,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X4]: createSizingStep({
    value: 34,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X5]: createSizingStep({
    value: 55,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X6]: createSizingStep({
    value: 89,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X7]: createSizingStep({
    value: 144,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X8]: createSizingStep({
    value: 233,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X9]: createSizingStep({
    value: 377,
    baseFontSize: BASE_FONT_SIZE,
  }),
  [SIZING.X10]: createSizingStep({
    value: 610,
    baseFontSize: BASE_FONT_SIZE,
  }),
};

export const sizingSteps: SizingSteps = {
  [VIEWPORT.MOBILE]: sizingStepMobile,
  [VIEWPORT.TABLET]: sizingStepDesktop,
  [VIEWPORT.DESKTOP]: sizingStepDesktop,
};

export const sizing: Sizing = {
  baseFontSize: BASE_FONT_SIZE,
  baseFontSizePx: BASE_FONT_SIZE_PX,
  ratio: DEFAULT_SCALING_RATIO,
  sizeCSSVarNames: DEFAULT_SIZES_CSS_VAR_NAMES,
  sizingSteps,
};
