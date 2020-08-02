import React from 'react';
import styles from './button.module.scss';

interface ThisProps {
  size: 'small' | 'medium' | 'large';
  type: 'primary' | 'secondary';
  variant: 'icon' | 'reversed' | 'default';
}

export const Button: React.FC<ThisProps> = (props) => {
  return (
    <button type="button" className={`${styles[props.size]} ${styles[props.type]} ${styles[props.variant]}`}>
      {props.children}
    </button>
  );
};
