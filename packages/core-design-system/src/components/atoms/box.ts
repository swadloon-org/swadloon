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
  color?: ColorType<Override>;
  style?: Override extends string ? string : 'solid' | 'dotted';
  width?: SizeType<Override>;
  radius?: RadiusType<Override>;
};

export type BorderStyles<Override extends undefined | string = undefined> = {
  default?: Border<Override>;
  top?: Border<Override>;
  right?: Border<Override>;
  bottom?: Border<Override>;
  left?: Border<Override>;
};

export type Outline<Override extends undefined | string = undefined> = {
  color?: ColorType<Override>;
  style?: 'solid' | 'dotted';
  width?: SizeType<Override>;
  radius?: RadiusType<Override>;
};

export type BoxStyle<Override extends undefined | string = undefined> = {
  width?: SizeType<Override>;
  height?: SizeType<Override>;
  padding?: Padding<Override>;
  border?: BorderStyles<Override>;
  outline?: {
    default?: Outline<Override>;
    top?: Outline<Override>;
    right?: Outline<Override>;
    bottom?: Outline<Override>;
    left?: Outline<Override>;
  };
  backgroundColor?: ColorType<Override>;
};
