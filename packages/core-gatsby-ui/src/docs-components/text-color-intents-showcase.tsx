import { Stack, useTreatTheme } from '@newrade/core-react-ui/src';
import { default as React } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './text-color-intents-showcase.treat';

type Props = {};

export const TextColorIntentsShowcase: React.FC<Props> = (props) => {
  const { cssTheme } = useTreatTheme();
  const { styles } = useStyles(styleRefs);

  return (
    <Stack className={styles.wrapper} gap={[cssTheme.sizing.var.x5]}>
      <Stack gap={[cssTheme.sizing.var.x3]}>
        <div className={`${styles.text} ${styles.textSans}`}>Primary</div>
        <div className={`${styles.text} ${styles.textSans}`}>Secondary</div>
        <div className={`${styles.text} ${styles.textSans}`}>Tertiary</div>
        <div className={`${styles.text} ${styles.textSans}`}>Fourth</div>
      </Stack>
    </Stack>
  );
};
