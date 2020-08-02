import React from 'react';
import styles from './info-tile.module.scss';

interface OwnProps {
  position: 'bottom-left' | 'bottom-right';
}

export const InfoTile: React.FC<OwnProps> = (props) => {
  return <div className={`${styles.framed} ${styles[props.position]}`}>{props.children}</div>;
};
