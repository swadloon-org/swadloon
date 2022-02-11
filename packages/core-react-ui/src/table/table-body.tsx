import React from 'react';

import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './table-body.css';

type Props = PrimitiveProps<'tbody'> & {};

export const TableBody: React.FC<Props> = React.memo((props) => {
  return <Primitive as={'tbody'} classNames={[styles.base]} {...props}></Primitive>;
});
