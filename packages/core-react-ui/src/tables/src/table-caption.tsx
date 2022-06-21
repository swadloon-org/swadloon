import React from 'react';

import { Primitive } from '../primitive/primitive.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';

import * as styles from './table-caption.css.js';

type Props = PrimitiveProps<'caption'> & {};

export const TableCaption: React.FC<Props> = React.memo(({ children, ...props }) => {
  return (
    <Primitive as={'caption'} classNames={[styles.base]} {...props}>
      {children}
    </Primitive>
  );
});
