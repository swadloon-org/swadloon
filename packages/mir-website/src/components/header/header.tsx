import React from 'react';

import styles from './header.module.scss';

export const Header: React.FC<{}> = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};
