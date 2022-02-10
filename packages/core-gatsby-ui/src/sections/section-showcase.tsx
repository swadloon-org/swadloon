import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { BoxV2, useCommonProps } from '@newrade/core-react-ui';
import { layoutVars, sizeVars } from '@newrade/core-react-ui/theme';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';

import { SectionProps } from './section.props';
import { SectionBase } from './section-base';

import * as styles from './section-showcase.css';

type Props = SectionProps & {
  LeftTextBlock: React.ReactNode;
  LeftBGBlock: React.ReactNode;
  RightTextBlock: React.ReactNode;
  RightBGBlock: React.ReactNode;
};

export const SectionShowcase = React.forwardRef<HTMLElement, Props>(
  (
    {
      id,
      style,
      className,
      as,
      AsElement,
      inView,
      LeftTextBlock,
      LeftBGBlock,
      RightTextBlock,
      RightBGBlock,
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
    const commonProps = useCommonProps<'section'>({
      id,
      style,
      className,
      classNames: [styles.wrapper],
      ...props,
    });

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
        <div className={`${styles.gridSwitch} `}>
          <div className={styles.leftBlock}>
            {LeftBGBlock}
            <BoxV2
              className={styles.leftInnerBlock}
              padding={[sizeVars.x7, layoutVars.var.contentMargins]}
            >
              {LeftTextBlock}
            </BoxV2>
          </div>
          <div className={styles.rightBlock}>
            {RightBGBlock}
            <BoxV2
              className={styles.rightInnerBlock}
              padding={[sizeVars.x7, layoutVars.var.contentMargins]}
            >
              {RightTextBlock}
            </BoxV2>
          </div>
        </div>
      </SectionBase>
    );
  }
);
