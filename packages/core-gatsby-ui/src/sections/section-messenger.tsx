import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { BoxV2, Stack, useCommonProps } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';

import { SectionProps } from './section.props';
import { SectionBase } from './section-base';

import * as styles from './section-messenger.css';

type Props = SectionProps & {
  LeftBlock: React.ReactNode;
  RightBlocks: React.ReactNode;
};

export const SectionMessenger = React.forwardRef<HTMLElement, Props>(
  (
    {
      id,
      style,
      className,
      as,
      AsElement,
      LeftBlock,
      RightBlocks,
      section: {
        variant = Variant.primary,
        baseLayout = SectionBaseLayout.center,
        padding = SectionPadding.large,
        colorMode,
        colorScheme,
      } = {
        variant: Variant.primary,
        baseLayout: SectionBaseLayout.center,
        padding: SectionPadding.large,
      },
      ...props
    },
    ref
  ) => {
    const commonProps = useCommonProps<'section'>({
      id,
      style,
      className,
      ...props,
    });

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
        <div className={styles.grid}>
          <BoxV2
            className={styles.gridTitle}
            alignItems={['flex-start']}
            justifySelf={['flex-start', 'flex-start', 'flex-end']}
          >
            {LeftBlock}
          </BoxV2>

          <Stack gap={[sizeVars.x5]} className={styles.gridMessages}>
            {RightBlocks}
          </Stack>
        </div>
      </SectionBase>
    );
  }
);
