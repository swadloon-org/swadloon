import { Variant } from '@newrade/core-design-system';
import { BoxV2, Center, CommonComponentProps, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './section-banner.treat';
import { SectionBase } from './section-base';
import { SectionBaseLayout, SectionPadding, SectionProps } from './section.props';

type Props = CommonComponentProps &
  SectionProps & {
    BackgroundBlock: React.ReactNode;
    ContentBlock: React.ReactNode;
    callout?: boolean;
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
      callout,
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
    const commonProps = useCommonProps({
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

    const BackgroundBlockComponent = BackgroundBlock ? (
      React.cloneElement(BackgroundBlock as React.ReactElement, innerBlockProps)
    ) : (
      <div {...innerBlockProps}></div>
    );

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
          <BoxV2 padding={[cssTheme.sizing.var.x7, cssTheme.layout.var.contentMargins]}>{ContentBlock}</BoxV2>
        </Center>

        {/* inject the passed children, in case user wants to render something custom */}
        {children}
      </SectionBase>
    );
  }
);
