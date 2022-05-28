import React from 'react';

import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './hr.css';

type Props = PrimitiveProps<'hr'>;

export const Hr: React.FC<Props> = (props) => {
  return <hr className={styles.wrapper} {...props}></hr>;
};
