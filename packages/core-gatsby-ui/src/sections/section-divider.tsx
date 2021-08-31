import { Variant } from '@newrade/core-design-system';
import { Switcher, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';
import React from 'react';
import { useStyles } from 'react-treat';
import { SectionBase } from './section-base';
import * as styleRefs from './section-divider.treat';
import { SectionProps } from './section.props';

type Props = SectionProps & {
  RightBlock: React.ReactNode;
  LeftBlock: React.ReactNode;
};

export const SectionDivider = React.forwardRef<HTMLElement, Props>(
  (
    {
      id,
      style,
      className,
      as,
      AsElement,
      RightBlock,
      LeftBlock,
      section: {
        variant = Variant.primary,
        baseLayout = SectionBaseLayout.fullWidth,
        padding = SectionPadding.none,
      } = {
        variant: Variant.primary,
        baseLayout: SectionBaseLayout.fullWidth,
        padding: SectionPadding.none,
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
        <Switcher col={[1, 1, 2]} gap={['0px', '0px', cssTheme.sizing.var.x6]}>
          <div className={styles.left}>{LeftBlock}</div>

          <div className={styles.right}>{RightBlock}</div>
        </Switcher>
      </SectionBase>
    );
  }
);
