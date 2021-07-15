import { Variant } from '@newrade/core-design-system';
import { Stack, Switcher, useCommonProps, useTreatTheme } from '@newrade/core-react-ui/src';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionBase } from './section-base';
import * as styleRefs from './section-statement.treat';
import { SectionProps } from './section.props';

type Props = SectionProps & {
  TopBlock: React.ReactNode;
  RightBlock: React.ReactNode;
  LeftBlock: React.ReactNode;
};

export const SectionStatement = React.forwardRef<HTMLElement, Props>(
  (
    {
      id,
      style,
      className,
      as,
      AsElement,
      TopBlock,
      RightBlock,
      LeftBlock,
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
    const { styles } = useStyles(styleRefs);
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
        <Stack gap={[cssTheme.sizing.var.x6]}>
          <div className={styles.top}>{TopBlock}</div>

          <Switcher
            col={2}
            gap={[cssTheme.sizing.var.x6]}
            alignItems={['flex-start', 'flex-start', 'flex-start']}
          >
            <div className={styles.left}>{LeftBlock}</div>
            <div className={styles.right}>{RightBlock}</div>
          </Switcher>
        </Stack>
      </SectionBase>
    );
  }
);
