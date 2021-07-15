import { Variant } from '@newrade/core-design-system';
import { Stack, useCommonProps, useTreatTheme } from '@newrade/core-react-ui/src';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';
import React from 'react';
import { SectionBase } from './section-base';
import { SectionProps } from './section.props';

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
