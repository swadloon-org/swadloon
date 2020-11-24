import { DesignSystem } from '@newrade/core-design-system';
import { CSSDesignSystem } from '../design-system/css-design-system';

export function createCSSTheme(theme: DesignSystem): Partial<CSSDesignSystem> {
  return {
    name: theme.name,
    variation: theme.variation,
  };
}
