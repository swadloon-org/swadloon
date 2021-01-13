import { ColorType, RadiusType, SizeType } from '../../types';

/**
 * NOTE: not currently used
 */

export type Padding<Override extends undefined | string = undefined> = {
  default?: SizeType<Override>;
  top?: SizeType<Override>;
  right?: SizeType<Override>;
  bottom?: SizeType<Override>;
  left?: SizeType<Override>;
};

export type Border<Override extends undefined | string = undefined> = {
  borderColor?: ColorType<Override>;
  borderStyle?: 'solid' | 'dotted';
  borderWidth?: SizeType<Override>;
  borderRadius?: RadiusType<Override>;
};

export type Outline<Override extends undefined | string = undefined> = {
  outlineColor?: ColorType<Override>;
  outlineStyle?: 'solid' | 'dotted';
  outlineWidth?: SizeType<Override>;
  outlineRadius?: RadiusType<Override>;
};

export type BoxStyle<Override extends undefined | string = undefined> = {
  width?: number;
  height?: number;
  padding?: Padding<Override>;
  border?: {
    default?: Border<Override>;
    top?: Border<Override>;
    right?: Border<Override>;
    bottom?: Border<Override>;
    left?: Border<Override>;
  };
  outline?: {
    default?: Outline<Override>;
    top?: Outline<Override>;
    right?: Outline<Override>;
    bottom?: Outline<Override>;
    left?: Outline<Override>;
  };
  backgroundColor?: ColorType<Override>;
};
