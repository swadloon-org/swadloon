import React from 'react';
import styles from './info-tile.module.scss';

import { Illustration } from './illustration';

interface OwnProps {
  state: 'default' | 'reverse';
}

export const InfoTile: React.FC<OwnProps> = (props) => {
  return (
    <div className={`${styles.wrapper} ${styles[props.state]}`}>
      <Illustration name="Desktop"></Illustration>
    </div>
  );
};
