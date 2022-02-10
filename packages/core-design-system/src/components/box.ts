import { ColorType, RadiusType, SizeType } from '../types';

export type Margin<Override extends undefined | string = undefined> = {
  top?: SizeType<Override>;
  right?: SizeType<Override>;
  bottom?: SizeType<Override>;
  left?: SizeType<Override>;
};

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
  default: Border<Override>;
  top: Border<Override>;
  right: Border<Override>;
  bottom: Border<Override>;
  left: Border<Override>;
};

export type OutlineStyles<Override extends undefined | string = undefined> = {
  color?: ColorType<Override>;
  style?: Override extends string ? string : 'solid' | 'dotted';
  width?: SizeType<Override>;
  radius?: RadiusType<Override>;
};

/**
 * General style props for box model components
 */
export type BoxStyle<Override extends undefined | string = undefined> = {
  width?: SizeType<Override>;
  height?: SizeType<Override>;
  padding: Padding<Override>;
  border: BorderStyles<Override>;
  outline: OutlineStyles<Override>;
  backgroundColor?: ColorType<Override>;
};

/**
 * Specific styles for tabular cell components
 */
export type CellStyle<Override extends undefined | string = undefined> = {
  padding: Padding<Override>;
  border: BorderStyles<Override>;
  outline: OutlineStyles<Override>;
  backgroundColor?: ColorType<Override>;
};
