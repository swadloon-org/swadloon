import { Color } from '../../primitives/color';

export type Padding = {
  default?: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
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

export type BoxStyle = {
  width?: number;
  height?: number;
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
