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
      padding: CSSTypes.PaddingProperty<string>;
      border: CSSTypes.BorderProperty<string>;
      outline: CSSTypes.OutlineProperty<string>;
    };
  };
}

export type CSSDesignSystem = DesignSystem<CSSDesignSystemTypes>;

export interface Theme {
  theme: DesignSystem;
  cssTheme: CSSDesignSystem;
}
