import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './css-transition.treat';

type Props = CommonComponentProps & {
  animation: string;
};

export const CSSTransition: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);

  return <div className={styles.fadeOut}>{props.children}</div>;
};
