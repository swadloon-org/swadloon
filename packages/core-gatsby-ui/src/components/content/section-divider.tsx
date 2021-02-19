import { BoxV2, Switcher, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { Section } from './section';
import { SectionLayout, SectionPadding, SectionProps } from './section.props';

type Props = SectionProps & {
  RightBlock: React.ReactNode;
  LeftBlock: React.ReactNode;
};

export const SectionDivider: React.FC<Props> = ({
  id,
  style,
  className,
  variant,
  variantLayout = SectionLayout.fullWidth,
  variantPadding = SectionPadding.none,
  RightBlock,
  LeftBlock,
  ...props
}) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Section variant={variant} variantLayout={variantLayout} variantPadding={variantPadding}>
      <Switcher col={2}>
        <BoxV2 padding={[cssTheme.sizing.var.x7, cssTheme.sizing.var.x5]}>{LeftBlock}</BoxV2>

        {RightBlock}
      </Switcher>
    </Section>
  );
};
