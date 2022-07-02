import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { Switcher, useCommonProps } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';

import { SectionProps } from './section.props.js';
import { SectionBase } from './section-base.js';
import * as styles from './section-divider.css.js';

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
        colorMode,
        colorScheme,
      } = {
        variant: Variant.primary,
        baseLayout: SectionBaseLayout.fullWidth,
        padding: SectionPadding.none,
      },
      ...props
    },
    ref
  ) => {
    const commonProps = useCommonProps<'section'>({ id, style, className, ...props });

    return (
      <SectionBase
        ref={ref}
        section={{
          variant,
          baseLayout,
          padding,
          colorMode,
          colorScheme,
        }}
        {...commonProps}
      >
        <Switcher col={[1, 1, 2]} gap={['0px', '0px', sizeVars.x6]}>
          <div className={styles.left}>{LeftBlock}</div>

          <div className={styles.right}>{RightBlock}</div>
        </Switcher>
      </SectionBase>
    );
  }
);
