import { ButtonProps, Sizing } from '@newrade/core-design-system';
import React, { ButtonHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './box.treat';

type OwnProps = {
  className: string;
  padding?: Sizing;
  widthMax?: 'small' | 'medium' | 'large' | 'x-large' | number;
};

export const LayoutBox: React.FC<OwnProps> = ({ className, ...props }) => {
  const styles = useStyles(styleRefs);

  return <div className={`${className || ''} `}>{props.children}</div>;
};
