import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './switcher.treat';
import { CommonComponentProps } from '../props/component-common.props';
import { GapProp } from '../props/layout.prop';

type OwnProps = CommonComponentProps &
  Partial<{
    gap: GapProp;
  }>;

export const Switcher: React.FC<OwnProps> = ({ as, className, style, ...props } = {}) => {
  const styles = useStyles(styleRefs);

  const mergedClassName = `${styles.wrapper} ${className}`;

  return React.createElement(as || 'div', { className: mergedClassName, style, ...props });
};
