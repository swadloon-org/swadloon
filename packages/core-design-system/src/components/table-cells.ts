import { TEXT_STYLE } from '../foundations/typography.js';
import { ColorType, NumberType } from '../types.js';

import { CellStyle } from './box.js';
import { Variant } from './components.js';

export enum TableCellAs {
  td = 'td',
}

/**
 * Affect the cell's data formatting
 */
export enum TableCellType {
  /** raw text */
  text = 'text',
  /** raw number */
  number = 'number',
  /** content will be another component */
  component = 'component',
}

export enum TableCellSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
  xSmall = 'xSmall',
}

export enum TableCellAlignment {
  left = 'left',
  center = 'center',
  right = 'right',
}

export enum TableCellState {
  rest = 'rest',
  hover = 'hover',
  active = 'active',
  focused = 'focused',
  disabled = 'disabled',
}

/**
 * Representation of a table (tabular data) cell. Uses the paragraph's size and text styles.
 *
 * @typedef {Object} TableCellProps
 */
export type TableCellDSProps = {
  /**
   * Visual importance and style type of the cell
   */
  variant?: Variant;
  /**
   * Will apply specific styles for each data types
   */
  type?: TableCellType;
  /**
   * Size / density of the cell (padding and font size)
   */
  size?: TableCellSize; // same as paragraph sizes
  /**
   * Horizontal alignment of the cell data
   */
  alignment?: TableCellAlignment; // same as paragraph sizes
  /**
   * Text style to apply to cell
   */
  textStyle?: TEXT_STYLE; // same as paragraph style
};

export type TableCellStyle<Override extends undefined | string = undefined> = {
  textColor?: ColorType<Override>;
};

export type TableCellSizeStyle<Override extends undefined | string = undefined> = {
  verticalSpacing?: NumberType<Override>;
};

export type TableCellBoxStyle<Override extends undefined | string = undefined> =
  CellStyle<Override> & {};

export type TableCellVariants<Override extends undefined | string = undefined> = {
  [key in Variant]: TableCellBoxStyle<Override>;
};

export type TableCellSizes<Override extends undefined | string = undefined> = {
  [key in TableCellSize]: TableCellSizeStyle<Override>;
};

export interface TableCells<Override extends undefined | string = undefined> {
  variants: TableCellVariants<Override>;
  sizes: TableCellSizes<Override>;
}
