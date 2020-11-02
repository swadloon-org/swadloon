import React, { LabelHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './label.treat';
import { LABEL } from '@newrade/core-design-system-old';

interface OwnProps {
  variant: LABEL;
  as?: 'label' | 'div';
}

export const Label: React.FC<LabelHTMLAttributes<any> & OwnProps> = ({ className, variant, children, htmlFor, as }) => {
  const styles = useStyles(styleRefs);

  if (as === 'div') {
    return <div className={`${className || ''} ${styles[variant]}`}>{children}</div>;
  }

  return (
    <label className={`${className || ''} ${styles[variant]}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
