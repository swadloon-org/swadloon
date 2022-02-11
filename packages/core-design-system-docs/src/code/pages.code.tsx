import React from 'react';

import { Details, lorenipsum, Paragraph, Summary } from '@newrade/core-react-ui';

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
