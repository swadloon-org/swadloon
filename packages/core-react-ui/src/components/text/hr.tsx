import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import * as styleRefs from './hr.treat';

type Props = CommonComponentProps;

export const Hr: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);
  return <hr className={styles.wrapper} {...props}></hr>;
};
