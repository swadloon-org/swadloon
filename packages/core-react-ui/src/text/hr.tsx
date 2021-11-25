import React from 'react';
import { useStyles } from 'react-treat';

import { PrimitiveProps } from '../primitive/primitive.props';

import * as styleRefs from './hr.treat';

type Props = PrimitiveProps<'hr'>;

export const Hr: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);
  return <hr className={styles.wrapper} {...props}></hr>;
};
