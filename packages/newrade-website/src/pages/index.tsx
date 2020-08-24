import React from 'react';

import Logo from '../illustrations/logo-color.svg';

import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Logo />
    </div>
  );
}
