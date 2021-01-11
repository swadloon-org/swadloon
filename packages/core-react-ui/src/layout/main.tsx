import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './main.treat';

type Props = CommonComponentProps & {
  navbarPadding?: boolean;
};

export const Main: React.FC<Props> = ({ as, style, className, navbarPadding, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const type = as ? as : 'div';
  const mergedClassName = `${className || ''} ${styles.wrapper} ${navbarPadding ? styles.navbar : ''}`;

  return React.createElement(type, {
    style: {
      ...style,
    },
    className: mergedClassName,
    ...props,
  });
};
