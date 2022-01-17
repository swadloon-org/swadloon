import React from 'react';

import { PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';

import { Primitive } from '../primitive/primitive';

import { TableCellProps } from './table.props';

import * as styles from './table-cell.css';

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
  variantStyle,
  size: variantSize = PARAGRAPH_SIZE.small,
  ...props
}) {
  return (
    <Primitive
      as={'td'}
      classNames={[
        styles.variants({
          size: variantSize,
        }),
      ]}
      {...props}
    ></Primitive>
  );
});
