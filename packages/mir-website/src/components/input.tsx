import React, { HTMLAttributes } from 'react';
import styles from './input.module.scss';

interface OwnProps {
  variant: 'default' | 'reversed';
  placeholder: string;
}

export const Input: React.FC<OwnProps & HTMLAttributes<any>> = (props) => {
  return (
    <input className={`${styles.wrapper} ${styles[props.variant]}`} type="text" placeholder={`${props.placeholder}`} />
  );
};
