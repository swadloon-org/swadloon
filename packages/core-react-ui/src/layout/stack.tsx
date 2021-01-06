import React from 'react';
import { useStyles } from 'react-treat';
import { style } from 'treat';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './stack.treat';
import { SIZE } from '@newrade/core-design-system';
import { GapProperty, JustifyContentProperty, GridGapProperty } from 'csstype';

type OwnProps = CommonComponentProps &
  Partial<{
    gap: [string] | [string, string] | [string, string, string];
  }>;

export const Stack: React.FC<OwnProps> = ({ as, className = '', gap = [''], ...props } = {}) => {
  const { styles } = useStyles(styleRefs);
  const [mobileGap, tabletGap, desktopGap] = gap;

  return React.createElement(as || 'div', {
    className: `${className || ''} ${styles.wrapper}`,
    style: {
      ...style,
      // @ts-ignore
      '--mobileGap': mobileGap,
      '--tabletGap': tabletGap || mobileGap,
      '--desktopGap': desktopGap || tabletGap || mobileGap,
    },
    ...props,
  });
};
