import React from 'react';

import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './table-row.css';

type Props = PrimitiveProps<'tr'> & {};

export const TableRow: React.FC<Props> = React.memo((props) => {
  return <Primitive as={'tr'} classNames={[styles.base]} {...props}></Primitive>;
});
