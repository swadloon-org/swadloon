import { Variant } from '@newrade/core-design-system';
import { Stack, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { SectionBaseLayout, SectionPadding } from '../api/section.api';
import { SectionBase } from './section-base';
import { SectionProps } from './section.props';

type Props = SectionProps & {
  Blocks: React.ReactNode;
};

export const SectionStack = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      as,
      AsElement,
      Blocks,
      section: {
        variant = Variant.primary,
        baseLayout = SectionBaseLayout.center,
        padding = SectionPadding.large,
      } = {
        variant: Variant.primary,
        baseLayout: SectionBaseLayout.center,
        padding: SectionPadding.large,
      },
      ...props
    },
    ref
  ) => {
    const { cssTheme } = useTreatTheme();
    const commonProps = useCommonProps({ id, style, className, ...props });

    return (
      <SectionBase
        ref={ref}
        {...commonProps}
        section={{
          variant,
          baseLayout,
          padding,
        }}
      >
        <Stack gap={[cssTheme.sizing.var.x5]}>{Blocks}</Stack>
      </SectionBase>
    );
  }
);
