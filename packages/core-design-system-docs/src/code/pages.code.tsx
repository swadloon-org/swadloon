import { lorenipsum } from '@newrade/core-gatsby-ui/lib/docs-components/loren-ipsum';
import { Details, Paragraph, Summary } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const Accordions: React.FC<Props> = (props) => {
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
