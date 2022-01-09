import React from 'react';
import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';
import * as styles from './navbar-separator-item.css';



type Props = PrimitiveProps<'div'> & {
  kind?: 'bar' | 'empty';
};

export const NavbarSeparatorItem: React.FC<Props> = ({ kind = 'bar', ...props }) => {
  return (
    <Primitive classNames={[styles.base]} {...props}>
      {kind === 'bar' ? <div className={styles.bar}></div> : null}
      {kind === 'empty' ? <div className={styles.empty}></div> : null}
    </Primitive>
  );
};
