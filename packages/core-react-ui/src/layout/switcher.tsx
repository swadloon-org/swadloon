import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './switcher.treat';
import { CommonComponentProps } from '../props/component-common.props';
import { GapProp } from '../props/layout.prop';

type OwnProps = CommonComponentProps &
  Partial<{
    gap: GapProp;
    col: number;
  }>;

export const Switcher: React.FC<OwnProps> = ({ id, className, style, as, col, gap = [], ...props } = {}) => {
  const styles = useStyles(styleRefs);
  const [mobileGap, tabletGap, desktopGap] = gap;

  const mergedClassName = `${styles.wrapper} ${className}`;
  const mergedStyle = {
    ...style,
    '--switcher-columns': col ? col : 2,
    '--mobile-gap': mobileGap,
    '--tablet-gap': tabletGap || mobileGap,
    '--desktop-gap': desktopGap || tabletGap || mobileGap,
  };

  return React.createElement(as || 'div', { id, style: mergedStyle, className: mergedClassName, ...props });
};
