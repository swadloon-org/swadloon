import React from 'react';

import {
  PARAGRAPH_SIZE,
  TableCellAlignment,
  TableCellSize,
  TableCellType,
  Variant,
} from '@newrade/core-design-system';

import { Primitive } from '../primitive/primitive.js';

import { TableCellProps } from './table.props.js';
import * as styles from './table-cell.css.js';

/**
 * @typedef {Object} TableCellProps
 */
type Props = TableCellProps;

/**
 * @description Render a td element using paragraph text
 * @type {React.FC<TableCellProps>}
 * @param {TableCellProps} props
 */
export const TableCell: React.FC<Props> = React.memo(function TableCell({
  variant = Variant.primary,
  type = TableCellType.text,
  size = TableCellSize.small,
  alignment = TableCellAlignment.left,
  textStyle,
  ...props
}) {
  return (
    <Primitive
      as={'td'}
      classNames={[
        styles.variants({
          size: size,
        }),
      ]}
      {...props}
    ></Primitive>
  );
});
