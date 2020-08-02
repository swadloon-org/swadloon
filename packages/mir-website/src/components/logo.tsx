import React from 'react';
import styles from './logo.module.scss';

interface OwnProps {
  type: 'framed' | 'text' | 'framed-text';
  variant: 'reversed' | 'default';
}

export const InfoTile: React.FC<OwnProps> = (props) => {
  return <div className={`${styles[props.type]} ${styles[props.variant]}`}>{props.children}</div>;
};
