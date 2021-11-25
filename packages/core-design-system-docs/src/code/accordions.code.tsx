import React from 'react';

import { lorenipsum } from '@newrade/core-gatsby-ui/src/docs-components/loren-ipsum';
import { Details, Paragraph, Summary, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const Accordions: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Details>
        <Summary>Accordion</Summary>

        <Paragraph>{lorenipsum}</Paragraph>
      </Details>

      <Details>
        <Summary>Accordion</Summary>

        <Paragraph>{lorenipsum}</Paragraph>
      </Details>

      <Details>
        <Summary>Accordion</Summary>

        <Paragraph>{lorenipsum}</Paragraph>
      </Details>
    </>
  );
};
