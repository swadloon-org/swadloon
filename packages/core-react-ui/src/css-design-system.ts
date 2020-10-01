import CSSTypes from 'csstype';
import { DesignSystem } from '../../core-design-system/src';

export type CSSDesignSystemTypes = {
  color: CSSTypes.Color;
  shadow: CSSTypes.BoxShadowProperty;
};

export type CSSDesignSystem = DesignSystem<CSSDesignSystemTypes>;

// theme.typography.headings.h1 => {}
// themeCss.typography.headings.h1 => ... ?

// theme.effects.shadows.heavy => BoxShadow {...}
// themeCss.effects.shadows.heavy => string '0 0 2px 0 red'

// theme.sizing.sizes.x1 => SizingStep {...}
// themeCss.sizing.sizes.x1 => 'var(--sizing-x1)'

// theme.animations.fadeIn => {}
