import { DesignSystem, DesignSystemTypes } from '@newrade/core-design-system';
import CSSTypes, { FontWeightProperty, LetterSpacingProperty, TextTransformProperty } from 'csstype';

export interface CSSDesignSystemTypes extends DesignSystemTypes {
  themes: 'light';
  color: CSSTypes.Color;
  shadow: CSSTypes.BoxShadowProperty;
  sizing: number;
  typography: {
    fontWeight: FontWeightProperty;
    letterSpacing: LetterSpacingProperty<any>;
    textTransform: TextTransformProperty;
  };
}

export type CSSDesignSystem = DesignSystem<CSSDesignSystemTypes>;
