import React, { useState } from 'react';
import styles from './tab.module.scss';
import { Label } from './label';
interface OwnProps {
  size: 'small';
  selected: 'selected' | 'default';
  text: string;
}

export const Tab: React.FC<OwnProps> = (props) => {
  return (
    <div className={`${styles.wrapper} ${styles[props.size]} ${styles[props.selected]}`}>
      <Label size="small" variant="uppercase">
        {props.text}
      </Label>
    </div>
  );
};
