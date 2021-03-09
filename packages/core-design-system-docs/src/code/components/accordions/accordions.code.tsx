import { CodeOutline, Details, Paragraph, Summary, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { lorenipsum } from '../../../utils/loren-ipsum';

type Props = {};

export const Accordions: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
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
    </CodeOutline>
  );
};
