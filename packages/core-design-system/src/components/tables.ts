import { AriaRole } from 'react';

import { PARAGRAPH_SIZE, TEXT_STYLE } from '../foundations/typography';
import { ColorType } from '../types';

import { BoxStyle } from './box';
import { Variant } from './components';

export enum TableCellAs {
  table = 'table',
}

export enum TableCellSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export enum TableCellState {
  rest = 'rest',
  hover = 'hover',
  active = 'active',
  focused = 'focused',
  disabled = 'disabled',
}

/**
 * @typedef {Object} TableCellProps
 */
export type TableCellDSProps = {
  /**
   * Visual importance of the cell
   */
  variant?: Variant;
  /**
   * Size / density of the cell (padding and font size)
   */
  size?: PARAGRAPH_SIZE; // same as paragraph sizes
  /**
   * Text style to apply to cell
   */
  variantStyle?: TEXT_STYLE; // same as paragraph style
  // state?: TableCellState;
};

export type TableCellStyle<Override extends undefined | string = undefined> = {
  textColor?: ColorType<Override>;
  iconColor?: ColorType<Override>;
  backgroundColor?: ColorType<Override>;
  borderColor?: ColorType<Override>;
  outlineColor?: ColorType<Override>;
};

export type TableCellBoxStyle<Override extends undefined | string = undefined> =
  BoxStyle<Override> & {};

export type TableCellVariants<Override extends undefined | string = undefined> = {
  [key in Variant]: TableCellStyle<Override>;
};

export type TableCellSizes<Override extends undefined | string = undefined> = {
  [key in TableCellSize]: TableCellBoxStyle<Override>;
};

export interface TableCells<Override extends undefined | string = undefined> {
  variants: TableCellVariants<Override>;
  sizes: TableCellSizes<Override>;
}
