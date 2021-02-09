import { BoxV2, Stack, Switcher } from '@newrade/core-react-ui';
import React from 'react';
import { BlockMarkdown } from '../content/block-markdown';
import { Section } from './section';

type Props = {
  leftBlockCol: number;
  rightBlockCol: number;
};

export const SectionSwitcher: React.FC<Props> = (props) => {
  return (
    <Section>
      <Stack>
        <BoxV2>
          <BlockMarkdown></BlockMarkdown>
        </BoxV2>

        <Switcher col={2}>
          <BlockMarkdown></BlockMarkdown>

          <BlockMarkdown></BlockMarkdown>
        </Switcher>
      </Stack>
    </Section>
  );
};
