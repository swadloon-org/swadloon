import React from 'react';

import { TITLE, Variant } from '@newrade/core-design-system';
import { Heading, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { keys } from '@newrade/core-react-ui/utilities-iso';

type Props = {};

export const Titles: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x3]}>
      {keys(TITLE).map((variant, index) => (
        <Heading key={index} variant={TITLE[variant]} variantLevel={Variant.primary}></Heading>
      ))}
    </Stack>
  );
};
