import { lorenipsum } from '@newrade/core-gatsby-ui/lib/docs-components/loren-ipsum';
import { Details, Paragraph, Summary, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

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
