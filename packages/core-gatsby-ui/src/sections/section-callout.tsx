import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { BoxV2, Center, useCommonProps } from '@newrade/core-react-ui';
import { SectionBaseLayout, SectionPadding } from '@newrade/core-website-api';

import { SectionProps } from './section.props';
import { SectionBase } from './section-base';

import * as styles from './section-callout.css';

type Props = SectionProps & {
  BackgroundBlock?: React.ReactNode;
  ContentBlock: React.ReactNode;
};

export const SectionCallout = React.forwardRef<HTMLElement, Props>(
  (
    {
      id,
      style,
      className,
      as,
      AsElement,
      BackgroundBlock,
      ContentBlock,
      section: {
        variant = Variant.primary,
        baseLayout = SectionBaseLayout.fullWidth,
        padding = SectionPadding.none,
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
      classNames: [styles.wrapper],
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
