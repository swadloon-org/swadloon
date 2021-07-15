import React from 'react';
import { useStyles } from 'react-treat';
import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';
import * as styleRefs from './menu-separator.treat';

type Props = PrimitiveProps<'div'>;

export const MenuSeparator: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);
  return <Primitive classNames={[styles.wrapper]} {...props}></Primitive>;
};
