import { ButtonProps, Sizing } from '@newrade/core-design-system';
import React, { ButtonHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
// import * as styleRefs from './center.treat';

type OwnProps = {
  className: 'test';
  marginVertical?: Sizing | 'auto';
  marginHorizontal?: Sizing | 'auto';
  widthMax?: 'small' | 'medium' | 'large' | 'x-large';
};

export const LayoutCenter: React.FC<OwnProps> = ({
  className,
  marginHorizontal,
  marginVertical,
  widthMax,
  ...props
}) => {
  return <div className={`${className || ''} `}>{props.children}</div>;
};
