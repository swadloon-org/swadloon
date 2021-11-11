import React from 'react';
import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';
import * as styles from './navbar-separator-item.css';

type Props = PrimitiveProps<'div'>;

export const NavbarSeparatorItem: React.FC<Props> = (props) => {
  return <Primitive classNames={[styles.wrapper]} {...props}></Primitive>;
};
