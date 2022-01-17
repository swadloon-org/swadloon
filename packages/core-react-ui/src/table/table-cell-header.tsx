import React from 'react';

import { LABEL_SIZE, TEXT_STYLE } from '@newrade/core-design-system';

import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './table-cell-header.css';

type Props = PrimitiveProps & { variantStyle?: TEXT_STYLE; variant?: LABEL_SIZE };

/**
 * @description Render a td element using paragraph text
 * @type {React.FC<TableCellProps>}
 * @param {TableCellProps} props
 */
export const TableCellHeader: React.FC<Props> = React.memo(function TableCellHeader({
  variant = LABEL_SIZE.small,
  variantStyle,
  ...props
}) {
  return (
    <Primitive
      as={'th'}
      classNames={[
        styles.variants({
          size: variant,
        }),
      ]}
      {...props}
    ></Primitive>
  );
});
