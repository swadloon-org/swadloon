import React from 'react';

import styles from './footer.module.scss';

export const Footer: React.FC<{}> = (props) => {
  return <div className={styles.footer_default}>{props.children}</div>;
};
