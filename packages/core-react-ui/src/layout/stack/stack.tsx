import { Sizing } from '@newrade/core-design-system';
import React, { ButtonHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './stack.treat';

type OwnProps = {
  className: string;
  variant: 'stack-small' | 'stack-large';
  marginVertical: Sizing;
  widthMax: 'small' | 'medium' | 'large' | 'x-large';
};

export const LayoutStack: React.FC<OwnProps> = ({ className, variant, ...props }) => {
  const styles = useStyles(styleRefs);

  // TODO should we use reakti as a base https://reakit.io/docs/button/?

  return (
    <div className={`${className || ''}`} {...props}>
      {props.children}
    </div>
  );
};
