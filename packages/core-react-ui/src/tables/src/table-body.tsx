import React from 'react';

import { Primitive } from '../primitive/primitive.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';

import * as styles from './table-body.css.js';

type Props = PrimitiveProps<'tbody'> & {};

export const TableBody: React.FC<Props> = React.memo((props) => {
  return <Primitive as={'tbody'} classNames={[styles.base]} {...props}></Primitive>;
});
