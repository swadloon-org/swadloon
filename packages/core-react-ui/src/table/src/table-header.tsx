import React from 'react';

import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './table-header.css';

type Props = PrimitiveProps<'thead'> & {};

export const TableHeader: React.FC<Props> = React.memo(function TableHeader(props) {
  return (
    <Primitive
      as={'thead'}
      classNames={
        [
          // styles.variants({
          //   variant: variantLevel,
          //   size: variant,
          // }),
        ]
      }
      {...props}
    ></Primitive>
  );
});
