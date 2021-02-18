import { Switcher, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { Section } from './section';
import { SectionProps } from './section.props';

type Props = SectionProps & {
  RightBlock: React.ReactNode;
  LeftBlock: React.ReactNode;
};

export const SectionSwitcher: React.FC<Props> = ({ id, style, className, RightBlock, LeftBlock, ...props }) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Section>
      <Switcher col={2} gap={[cssTheme.sizing.var.x6]}>
        {LeftBlock}
        {RightBlock}
      </Switcher>
    </Section>
  );
};
