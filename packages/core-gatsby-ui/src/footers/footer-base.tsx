import React from 'react';
import { useStyles } from 'react-treat';

import { Variant } from '@newrade/core-design-system';
import { Center, Primitive, useTreatTheme } from '@newrade/core-react-ui';
import { globalThemeReversed } from '@newrade/core-react-ui/global';

import { FooterProps } from './footer.props';
import * as styleRefs from './footer-base.treat';

type Props = FooterProps;

const defaultProps: FooterProps = {
  footer: {
    variant: Variant.primary,
  },
};

export const FooterBase = React.forwardRef<HTMLElement, Props>(
  (
    {
      contentClassName,
      contentMaxWidth,
      footer = defaultProps.footer,
      colorMode,
      children,
      ...props
    },
    ref
  ) => {
    const variant = footer?.variant;

    /**
     * Styling
     */

    const { cssTheme } = useTreatTheme();
    const styles = useStyles(styleRefs);

    const variantClass = styles[getVariantClass(variant)];
    const isReversed = colorMode === 'reversed';

    function getVariantClass(variant: Variant | null | undefined) {
      const isReversed = colorMode === 'reversed';

      switch (variant) {
        default:
        case Variant.primary: {
          if (isReversed) {
            return Variant.primaryReversed;
          }
          return Variant.primary;
        }
        case Variant.secondary: {
          if (isReversed) {
            return Variant.secondaryReversed;
          }
          return Variant.secondary;
        }
        case Variant.tertiary: {
          if (isReversed) {
            return Variant.tertiaryReversed;
          }
          return Variant.tertiary;
        }
        case Variant.primaryReversed:
        case Variant.secondaryReversed:
        case Variant.tertiaryReversed: {
          return variant;
        }
      }
    }

    return (
      <Primitive
        ref={ref}
        variant={variant}
        classNames={[styles.wrapper, variantClass, isReversed ? globalThemeReversed : '']}
        AsElement={
          <Center
            as={'footer'}
            contentClassName={contentClassName}
            maxWidth={contentMaxWidth || cssTheme.layout.var.contentWidth.desktopMaxWidth}
          >
            {children}
          </Center>
        }
        {...props}
      />
    );
  }
);
