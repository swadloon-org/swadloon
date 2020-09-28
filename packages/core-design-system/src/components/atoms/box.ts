import { Color } from '../../primitives/color';
import { LengthValue } from '../../primitives/value';

export type Padding = {
  default?: LengthValue;
  top?: LengthValue;
  right?: LengthValue;
  bottom?: LengthValue;
  left?: LengthValue;
};

export type Border = {
  borderColor?: Color;
  borderStyle?: 'solid' | 'dotted';
  borderWidth?: LengthValue;
  borderRadius?: LengthValue;
};

export type Outline = {
  outlineColor?: Color;
  outlineStyle?: 'solid' | 'dotted';
  outlineWidth?: LengthValue;
  outlineRadius?: LengthValue;
};

export type BoxStyle = {
  width?: LengthValue;
  height?: LengthValue;
  padding?: Padding;
  border?: {
    default?: Border;
    top?: Border;
    right?: Border;
    bottom?: Border;
    left?: Border;
  };
  outline?: {
    default?: Outline;
    top?: Outline;
    right?: Outline;
    bottom?: Outline;
    left?: Outline;
  };
  backgroundColor?: Color;
};
