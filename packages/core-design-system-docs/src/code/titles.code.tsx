import React from 'react';

import { TITLE, Variant } from '@newrade/core-design-system';
import { Stack, Title, useTreatTheme } from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/utilities';

type Props = {};

export const Titles: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x3]}>
      {keys(TITLE).map((variant, index) => (
        <Title key={index} variant={TITLE[variant]} variantLevel={Variant.primary}></Title>
      ))}
    </Stack>
  );
};
