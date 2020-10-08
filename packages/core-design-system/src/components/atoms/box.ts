import { Color } from '../../primitives/color';

export type Padding<PaddingType = number> = {
  default?: PaddingType;
  top?: PaddingType;
  right?: PaddingType;
  bottom?: PaddingType;
  left?: PaddingType;
};

export type Border = {
  borderColor?: Color;
  borderStyle?: 'solid' | 'dotted';
  borderWidth?: number;
  borderRadius?: number;
};

export type Outline = {
  outlineColor?: Color;
  outlineStyle?: 'solid' | 'dotted';
  outlineWidth?: number;
  outlineRadius?: number;
};

export type BoxStyle<ColorType = Color, PaddingType = number, BorderType = Border, OutlineType = Outline> = {
  width?: number;
  height?: number;
  padding?: Padding<PaddingType>;
  border?: {
    default?: BorderType;
    top?: BorderType;
    right?: BorderType;
    bottom?: BorderType;
    left?: BorderType;
  };
  outline?: {
    default?: OutlineType;
    top?: OutlineType;
    right?: OutlineType;
    bottom?: OutlineType;
    left?: OutlineType;
  };
  backgroundColor?: ColorType;
};
