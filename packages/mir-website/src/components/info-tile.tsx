import React from 'react';
import styles from './info-tile.module.scss';

interface OwnProps {
  name: 'tile';
  state: 'default' | 'admin' | 'construction' | 'industrial';
}

export const InfoTile: React.FC<OwnProps> = (props) => {
  return <div className={`${styles[props.name]} ${styles[props.state]}`}>{props.children}</div>;
};
