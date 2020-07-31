import React from 'react';

import styles from './top-bar.module.scss';

export const TopBar: React.FC<{}> = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};
