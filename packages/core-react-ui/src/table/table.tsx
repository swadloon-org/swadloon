import React from 'react';

import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './table.css';

type Props = PrimitiveProps<'table'> & {};

export const Table: React.FC<Props> = React.memo((props) => {
  return (
    <div className={styles.wrapper}>
      <Primitive as={'table'} classNames={[styles.table]} {...props}></Primitive>
    </div>
  );
});
