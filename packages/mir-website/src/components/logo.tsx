import React from 'react';
import styles from './logo.module.scss';

interface OwnProps {
  type: 'framed' | 'text' | 'framed-text';
  variant: 'reversed' | 'default';
  src: string;
}

export const Logo: React.FC<OwnProps> = (props) => {
  return (
    <img src={`${[props.src]}`} className={`${styles.logo} ${styles[props.type]} ${styles[props.variant]}`}>
      {props.children}
    </img>
  );
};
