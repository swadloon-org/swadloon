import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { Stack, Switcher, useCommonProps } from '@newrade/core-react-ui';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';

import { SectionProps } from './section.props';
import { SectionBase } from './section-base';

import * as styles from './section-statement.css';

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
        <Stack gap={[sizeVars.x6]}>
          <div className={styles.top}>{TopBlock}</div>

          <Switcher
            col={2}
            gap={[sizeVars.x6]}
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
