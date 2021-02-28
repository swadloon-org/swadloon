import { Switcher, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { BaseSection } from './section-base';
import { SectionProps } from './section.props';

type Props = SectionProps & {
  RightBlock: React.ReactNode;
  LeftBlock: React.ReactNode;
};

export const SectionSwitcher = React.forwardRef<any, Props>(
  ({ id, style, className, variant, baseLayout, padding, RightBlock, LeftBlock, ...props }, ref) => {
    const { cssTheme } = useTreatTheme();

    return (
      <BaseSection variant={variant} baseLayout={baseLayout} padding={padding} ref={ref}>
        <Switcher col={2} gap={[cssTheme.sizing.var.x6]}>
          {LeftBlock}
          {RightBlock}
        </Switcher>
      </BaseSection>
    );
  }
);
