import { Variant } from '@newrade/core-design-system';
import { SectionBase, SectionBaseLayout, SectionPadding, SectionProps } from '@newrade/core-gatsby-ui/src';
import { Center, CommonComponentProps, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import React, { useImperativeHandle, useRef } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './section-banner.treat';

type Props = CommonComponentProps &
  SectionProps & {
    BackgroundBlock: React.ReactNode;
    ContentBlock: React.ReactNode;
  };

export const SectionBanner = React.forwardRef<any, Props>(
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
    const { styles } = useStyles(styleRefs);
    const { theme, cssTheme } = useTreatTheme();
    const localRef = useRef<HTMLDivElement>(null);
    const commonProps = useCommonProps({ id, style, className, classNames: [styles.wrapper], ...props });

    // merge local ref with forwarded
    useImperativeHandle(ref, () => ({
      current: localRef?.current,
    }));

    const innerBlockProps = {
      className: styles.background,
      children: <Center contentClassName={styles.textContainer}>{ContentBlock}</Center>,
    };

    const BackgroundBlockComponent = BackgroundBlock ? (
      React.cloneElement(BackgroundBlock as React.ReactElement, innerBlockProps)
    ) : (
      <div {...innerBlockProps}></div>
    );

    return (
      <SectionBase
        ref={localRef}
        section={{
          variant,
          baseLayout,
          padding,
        }}
        {...commonProps}
      >
        {BackgroundBlockComponent}
        {/* inject the passed children, incase user wants to render something custom */}
        {children}
      </SectionBase>
    );
  }
);
