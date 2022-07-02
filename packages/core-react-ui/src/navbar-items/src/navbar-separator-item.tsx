import React from 'react';

import { Primitive } from '../primitive/primitive.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';

import * as styles from './navbar-separator-item.css.js';

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
