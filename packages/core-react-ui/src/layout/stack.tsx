import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './stack.treat';

type OwnProps = CommonComponentProps &
  Partial<{
    gap: [string] | [string, string] | [string, string, string];
  }>;

export const Stack: React.FC<OwnProps> = ({ id, style, className = '', as, gap = ['0px'], ...props } = {}) => {
  const { styles } = useStyles(styleRefs);
  const [mobileGap, tabletGap, desktopGap] = gap;

  return React.createElement(as || 'div', {
    id,
    className: `${className || ''} ${styles.wrapper}`,
    style: {
      ...style,
      // @ts-ignore
      '--mobile-gap': mobileGap,
      '--tablet-gap': tabletGap || mobileGap,
      '--desktop-gap': desktopGap || tabletGap || mobileGap,
    },
    ...props,
  });
};
