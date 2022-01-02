import React from 'react';

import { lorenipsum } from '@newrade/core-react-ui';
import { Details, Paragraph, Stack, Summary, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const Accordions: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

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
