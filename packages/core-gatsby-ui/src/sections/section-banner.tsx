import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { BoxV2, Center, useCommonProps } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';

import { SectionProps } from './section.props.js';
import * as styles from './section-banner.css.js';
import { SectionBase } from './section-base.js';

type Props = SectionProps & {
  BackgroundBlock?: React.ReactNode;
  ContentBlock: React.ReactNode;
  callout?: boolean;
};

export const SectionBanner = React.forwardRef<HTMLElement, Props>(
  (
    {
      id,
      style,
      className,
      as,
      AsElement,
      BackgroundBlock,
      ContentBlock,
      callout,
      section: {
        variant = Variant.primary,
        baseLayout = SectionBaseLayout.fullWidth,
        padding = SectionPadding.none,
        colorMode,
        colorScheme,
        blocks,
      } = {
        variant: Variant.primary,
        baseLayout: SectionBaseLayout.fullWidth,
        padding: SectionPadding.none,
      },
      children,
      ...props
    },
    ref
  ) => {
    const commonProps = useCommonProps<'section'>({
      id,
      style,
      className,
      classNames: [styles.wrapper, callout ? styles.callout : ''],
      ...props,
    });

    // TODO: how to correctly merge inner and outer ref
    // merge local ref with forwarded
    // const localRef = useRef<HTMLDivElement>(null);
    // useImperativeHandle(ref, () => localRef);

    const innerBlockProps = {
      className: styles.background,
    };

    const BackgroundBlockComponent = BackgroundBlock
      ? React.cloneElement(BackgroundBlock as React.ReactElement, innerBlockProps)
      : null;

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
        {BackgroundBlockComponent}

        <Center>
          <BoxV2 padding={[sizeVars.x7, 0]}>{ContentBlock}</BoxV2>
        </Center>

        {/* inject the passed children, in case user wants to render something custom */}
        {children}
      </SectionBase>
    );
  }
);
