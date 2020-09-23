import React, { LabelHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './label.treat';
import { LABEL } from '@newrade/core-design-system';

interface OwnProps {
  variant: LABEL;
}

export const Label: React.FC<LabelHTMLAttributes<any> & OwnProps> = ({ className, variant, children, htmlFor }) => {
  const styles = useStyles(styleRefs);

  return (
    <label className={`${className || ''} ${styles[variant]}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
