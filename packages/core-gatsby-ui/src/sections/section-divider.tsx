import { Variant } from '@newrade/core-design-system';
import { BoxV2, Switcher, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { BaseSection } from './section-base';
import { SectionBaseLayout, SectionPadding, SectionProps } from './section.props';

type Props = SectionProps & {
  RightBlock: React.ReactNode;
  LeftBlock: React.ReactNode;
};

export const SectionDivider: React.FC<Props> = (
  {
    id,
    style,
    className,
    as,
    AsElement,
    RightBlock,
    LeftBlock,
    section: { variant = Variant.primary, baseLayout = SectionBaseLayout.center, padding = SectionPadding.large } = {
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
    <BaseSection
      ref={ref}
      {...commonProps}
      section={{
        variant,
        baseLayout,
        padding,
      }}
    >
      <Switcher col={2}>
        <BoxV2 padding={[cssTheme.sizing.var.x7, cssTheme.sizing.var.x5]}>{LeftBlock}</BoxV2>

        {RightBlock}
      </Switcher>
    </BaseSection>
  );
};
