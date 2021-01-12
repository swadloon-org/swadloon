import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './main-wrapper.treat';

type Props = CommonComponentProps & {
  navbarPadding?: boolean;
};

export const MainWrapper: React.FC<Props> = ({ style, className, as, navbarPadding, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const type = as ? as : 'div';
  const mergedClassName = `${className || ''} ${styles.wrapper}`;

  return React.createElement(type, {
    style: {
      ...style,
    },
    className: mergedClassName,
    ...props,
  });
};
