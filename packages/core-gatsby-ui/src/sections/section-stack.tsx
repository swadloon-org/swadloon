import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { Stack, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';

import { SectionProps } from './section.props';
import { SectionBase } from './section-base';

type Props = SectionProps & {
  Blocks: React.ReactNode;
};

export const SectionStack = React.forwardRef<HTMLElement, Props>(
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
    const commonProps = useCommonProps<'section'>({ id, style, className, ...props });

    return (
      <SectionBase
        ref={ref}
        section={{
          variant,
          baseLayout,
          padding,
        }}
        {...commonProps}
      >
        <Stack gap={[cssTheme.sizing.var.x5]}>{Blocks}</Stack>
      </SectionBase>
    );
  }
);
