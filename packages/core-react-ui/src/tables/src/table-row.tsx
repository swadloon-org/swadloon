import React from 'react';

import { Primitive } from '../primitive/primitive.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';

import * as styles from './table-row.css.js';

type Props = PrimitiveProps<'tr'> & {};

export const TableRow: React.FC<Props> = React.memo((props) => {
  return <Primitive as={'tr'} classNames={[styles.base]} {...props}></Primitive>;
});
