import { DesignSystem, DesignSystemTypes } from '@newrade/core-design-system';
import CSSTypes from 'csstype';

export interface CSSDesignSystemTypes extends DesignSystemTypes {
  themes: 'light';
  color: CSSTypes.Color;
  shadow: CSSTypes.BoxShadowProperty;
  sizing: number;
}

export type CSSDesignSystem = DesignSystem<CSSDesignSystemTypes>;

const defaultTheme: Partial<DesignSystem> = {
  name: 'core-react-ui',
  themes: 'light',
};

const defaultCSSTheme: Partial<CSSDesignSystem> = {
  name: 'core-react-ui',
  themes: 'light',
};

// theme.typography.headings.h1 => {}
// themeCss.typography.headings.h1 => ... ?

// theme.effects.shadows.heavy => BoxShadow {...}
// themeCss.effects.shadows.heavy => string '0 0 2px 0 red'

// theme.sizing.sizes.x1 => SizingStep {...}
// themeCss.sizing.sizes.x1 => 'var(--sizing-x1)'

// theme.animations.fadeIn => {}
