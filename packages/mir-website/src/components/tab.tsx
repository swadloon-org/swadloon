import React, { HtmlHTMLAttributes, AllHTMLAttributes } from 'react';
import { Label } from './label';
import styles from './tab.module.scss';

interface OwnProps {
  size: 'small';
  selected: boolean;
}

export const Tab: React.FC<OwnProps & { onClick: (e: React.MouseEvent<HTMLDivElement>) => void }> = (props) => {
  return (
    <div
      className={`${styles.wrapper} ${styles[props.size]} ${styles[props.selected ? 'selected' : '']}`}
      onClick={props.onClick}
    >
      <Label size="small" variant="uppercase">
        {props.children}
      </Label>
    </div>
  );
};
