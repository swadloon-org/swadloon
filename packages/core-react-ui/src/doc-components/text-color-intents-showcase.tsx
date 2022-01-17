import React from 'react';

import { Stack } from '../layout/stack';
import { sizeVars } from '../theme';
import { Label } from '..';

import * as styles from './text-color-intents-showcase.css';

type Props = {};

export const TextColorIntentsShowcase: React.FC<Props> = (props) => {
  return (
    <Stack className={styles.wrapper} gap={[sizeVars.x5]}>
      <Stack gap={[sizeVars.x3]}>
        <Label>Primary</Label>
        <Label>Secondary</Label>
        <Label>Tertiary</Label>
        <Label>Fourth</Label>
      </Stack>
    </Stack>
  );
};
