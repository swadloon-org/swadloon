import { BoxV2, Switcher, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { BaseSection } from './section-base';
import { SectionBaseLayout, SectionPadding, SectionProps } from './section.props';

type Props = SectionProps & {
  RightBlock: React.ReactNode;
  LeftBlock: React.ReactNode;
};

export const SectionDivider: React.FC<Props> = ({
  id,
  style,
  className,
  variant,
  baseLayout = SectionBaseLayout.fullWidth,
  padding = SectionPadding.none,
  RightBlock,
  LeftBlock,
  ...props
}) => {
  const { cssTheme } = useTreatTheme();

  return (
    <BaseSection variant={variant} baseLayout={baseLayout} padding={padding}>
      <Switcher col={2}>
        <BoxV2 padding={[cssTheme.sizing.var.x7, cssTheme.sizing.var.x5]}>{LeftBlock}</BoxV2>

        {RightBlock}
      </Switcher>
    </BaseSection>
  );
};
