import { Color } from '../../primitives/color';

export type Padding<PaddingType = number> = {
  default?: PaddingType;
  top?: PaddingType;
  right?: PaddingType;
  bottom?: PaddingType;
  left?: PaddingType;
};

export type Border<ColorType = Color, BorderWidthType = number, BorderRadiusType = number> = {
  borderColor?: ColorType;
  borderStyle?: 'solid' | 'dotted';
  borderWidth?: BorderWidthType;
  borderRadius?: BorderRadiusType;
};

export type Outline<ColorType = Color, OutlineWidthType = number, OutlineRadiusType = number> = {
  outlineColor?: ColorType;
  outlineStyle?: 'solid' | 'dotted';
  outlineWidth?: OutlineWidthType;
  outlineRadius?: OutlineRadiusType;
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
