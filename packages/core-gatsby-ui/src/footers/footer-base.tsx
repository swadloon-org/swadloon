import { Variant } from '@newrade/core-design-system';
import { Center, globalThemeReversed, useCommonProps, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './footer-base.treat';
import { FooterProps } from './footer.props';

type Props = FooterProps & {
  contentClassName?: string;
};

export const FooterBase = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      contentClassName,
      as,
      AsElement,
      footer: { variant = Variant.primary } = {
        variant: Variant.primary,
      },
      children,
      datatheme,
      ...props
    },
    ref
  ) => {
    /**
     * Styling
     */
    const { cssTheme } = useTreatTheme();
    const styles = useStyles(styleRefs);
    const commonProps = useCommonProps({
      id,
      style,
      className,
      classNames: [
        styles.wrapper,
        variant ? styles[variant] : '',
        variant === Variant.primaryReversed ? globalThemeReversed : '',
        variant === Variant.secondaryReversed ? globalThemeReversed : '',
        variant === Variant.tertiaryReversed ? globalThemeReversed : '',
      ],
      ...props,
    });

    return (
      <Center as={'footer'} ref={ref} {...commonProps} contentClassName={contentClassName}>
        {children}
      </Center>
    );
  }
);
