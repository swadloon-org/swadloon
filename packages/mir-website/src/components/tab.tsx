import React from 'react';
import styles from './tab.module.scss';

interface OwnProps {
  name: 'tab';
  size: 'small';
  state: 'Default' | 'Selected';
}

export const Tab: React.FC<OwnProps> = (props) => {
  return (
    <div className={`${styles[props.name]} ${styles[props.size]} ${styles[props.size]} ${styles[props.state]}`}>
      {props.children}
    </div>
  );
};
