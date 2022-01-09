import React from 'react';

import { HEADING } from '@newrade/core-design-system';
import { Heading, Stack } from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/utilities';

type Props = {};

export const Headings: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
      {keys(HEADING).map((variant, index) => (
        <Heading key={index} variant={HEADING[variant]}></Heading>
      ))}
    </Stack>
  );
};
