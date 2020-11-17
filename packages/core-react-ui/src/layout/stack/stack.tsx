import React from 'react';
import { useStyles } from 'react-treat';
import { style } from 'treat';
import { CommonComponentProps } from '../../props/component-common-props';
import * as styleRefs from './stack.treat';

type OwnProps = CommonComponentProps &
  Partial<{
    gap: string;
  }>;

export const Stack: React.FC<OwnProps> = ({ as, className = '', gap = '', ...props } = {}) => {
  const styles = useStyles(styleRefs);

  return React.createElement(
    as || 'div',
    { className: `${className || ''} ${styles.wrapper}`, style: { ...style, gap }, ...props },
    <>{props.children}</>
  );
};
