import React from 'react';

import { HEADING } from '@newrade/core-design-system';
import { Heading, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/utilities';

type Props = {};

export const Headings: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x3]}>
      {keys(HEADING).map((variant, index) => (
        <Heading key={index} variant={HEADING[variant]}></Heading>
      ))}
    </Stack>
  );
};
