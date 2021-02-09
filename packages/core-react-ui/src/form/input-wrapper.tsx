import React from 'react';
import { useStyles } from 'react-treat';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Stack } from '../layout/stack';
import * as styleRefs from './input-wrapper.treat';

type Props = {};

export const InputWrapper: React.FC<Props> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x1]} {...props} className={styles.wrapper}>
      {props.children}
    </Stack>
  );
};
