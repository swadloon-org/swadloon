import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './main.treat';
import { getMergedClassname } from '../utilities/component.utilities';

type Props = CommonComponentProps & {
  minHeight?: boolean;
  navbarPadding?: boolean;
};

export const Main: React.FC<Props> = ({ as, style, className, navbarPadding, minHeight, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const type = as ? as : 'main';
  const mergedClassName = getMergedClassname([
    className,
    styles.wrapper,
    navbarPadding ? styles.navbar : '',
    minHeight ? styles.minHeight : '',
  ]);

  return React.createElement(type, {
    style: {
      ...style,
    },
    className: mergedClassName,
    ...props,
  });
};
