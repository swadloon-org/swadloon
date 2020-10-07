import { DesignSystem, DesignSystemTypes } from '@newrade/core-design-system';
import CSSTypes from 'csstype';

export interface CSSDesignSystemTypes extends DesignSystemTypes {
  themes: 'light';
  color: CSSTypes.Color;
  shadow: CSSTypes.BoxShadowProperty;
  sizing: number;
  typography: {
    fontWeight: CSSTypes.FontWeightProperty;
    letterSpacing: CSSTypes.LetterSpacingProperty<any>;
    textTransform: CSSTypes.TextTransformProperty;
  };
  components: {
    button: {
      color: CSSTypes.Color;
      padding: CSSTypes.PaddingProperty<any>;
      border: CSSTypes.BorderProperty<any>;
      outline: CSSTypes.OutlineProperty<any>;
    };
  };
}

export type CSSDesignSystem = DesignSystem<CSSDesignSystemTypes>;
