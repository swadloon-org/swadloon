import React, { HTMLAttributes, InputHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './input.treat';

type OwnProps = {
  variant: 'normal' | 'reversed';
  placeholder: string;
} & InputHTMLAttributes<any>;

export const Input: React.FC<OwnProps> = ({ className, variant, placeholder, ...props }) => {
  const styles = useStyles(styleRefs);

  return (
    <input
      className={`${styles.wrapper} ${styles[variant]}`}
      type="text"
      placeholder={`${placeholder}`}
      {...props}
    />
  );
};

export const TextArea: React.FC<OwnProps> = ({ className, variant, placeholder, ...props }) => {
  const styles = useStyles(styleRefs);

  return (
    <textarea
      className={`${styles.wrapper} ${styles[variant]}`}
      type="text"
      placeholder={`${placeholder}`}
      {...props}
    />
  );
};
