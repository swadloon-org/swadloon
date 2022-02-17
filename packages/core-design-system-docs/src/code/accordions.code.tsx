import React from 'react';

import { Details, lorenipsum, Paragraph, Stack, Summary } from '@newrade/core-react-ui';

type Props = {};

export const Accordions: React.FC<Props> = (props) => {
  return (
    <Stack>
      <Details>
        <Summary>Summary 1</Summary>
        <Paragraph>{lorenipsum}</Paragraph>
      </Details>

      <Details>
        <Summary>Summary 2</Summary>
        <Paragraph>{lorenipsum}</Paragraph>
      </Details>

      <Details>
        <Summary>Summary 3</Summary>
        <Paragraph>{lorenipsum}</Paragraph>
      </Details>
    </Stack>
  );
};
