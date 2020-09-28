import { DesignSystem, SizingStep } from '@newrade/core-design-system';

export function createSizingStep({
  value,
  baseFontSize,
}: Pick<SizingStep, 'value'> & Pick<DesignSystem['sizing'], 'baseFontSize'>): SizingStep {
  return {
    value,
    valuePx: `${value}px`,
    valueRem: `${value / baseFontSize}rem`,
  };
}
