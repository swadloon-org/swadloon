import React from 'react';

import { PrimitiveProps } from '../primitive/primitive.props.js';

import * as styles from './hr.css.js';

type Props = PrimitiveProps<'hr'>;

export const Hr: React.FC<Props> = (props) => {
  return <hr className={styles.wrapper} {...props}></hr>;
};
