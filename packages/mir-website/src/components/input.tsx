import React, { HtmlHTMLAttributes, AllHTMLAttributes } from 'react';
import styles from './input.module.scss';

interface OwnProps {
  variant: 'default' | 'reversed';
  placeholder: string;
}

export const Input: React.FC<OwnProps> = (props) => {
  return (
    <input className={`${styles.wrapper} ${styles[props.variant]}`} type="text" placeholder={`${props.placeholder}`} />
  );
};
