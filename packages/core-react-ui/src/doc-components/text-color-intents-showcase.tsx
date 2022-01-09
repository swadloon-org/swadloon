import { default as React } from 'react';

import { Stack } from '../layout/stack';

import * as styles from './text-color-intents-showcase.css';

type Props = {};

export const TextColorIntentsShowcase: React.FC<Props> = (props) => {
  return (
    <Stack className={styles.wrapper} gap={[sizeVars.x5]}>
      <Stack gap={[sizeVars.x3]}>
        <div className={`${styles.text} ${styles.textSans}`}>Primary</div>
        <div className={`${styles.text} ${styles.textSans}`}>Secondary</div>
        <div className={`${styles.text} ${styles.textSans}`}>Tertiary</div>
        <div className={`${styles.text} ${styles.textSans}`}>Fourth</div>
      </Stack>
    </Stack>
  );
};
