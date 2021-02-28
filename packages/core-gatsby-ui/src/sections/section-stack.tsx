import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { BaseSection } from './section-base';
import { SectionProps } from './section.props';

type Props = SectionProps & {
  Blocks: React.ReactNode;
};

export const SectionStack = React.forwardRef<any, Props>(
  ({ id, style, className, variant, baseLayout, padding, Blocks, ...props }, ref) => {
    const { cssTheme } = useTreatTheme();

    return (
      <BaseSection variant={variant} baseLayout={baseLayout} padding={padding} ref={ref}>
        <Stack gap={[cssTheme.sizing.var.x5]}>{Blocks}</Stack>
      </BaseSection>
    );
  }
);
