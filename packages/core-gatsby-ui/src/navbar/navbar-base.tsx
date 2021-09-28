import { Variant } from '@newrade/core-design-system';
import { Center, Primitive, useTreatTheme } from '@newrade/core-react-ui';
import { globalThemeReversed } from '@newrade/core-react-ui/global';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './navbar-base.treat';
import { NavbarProps } from './navbar.props';

type Props = NavbarProps & {
  contentClassName?: string;
};

const defaultProps: NavbarProps = {
  navbar: {
    variant: Variant.primary,
  },
};

export const NavbarBase = React.forwardRef<HTMLElement, Props>(
  (
    {
      contentClassName,
      navbar = defaultProps.navbar,
      maxWidth,
      currentLanguage,
      languages,
      colorMode,
      children,
      ...props
    },
    ref
  ) => {
    const variant = navbar?.variant;
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
            as={'nav'}
            contentClassName={contentClassName}
            maxWidth={maxWidth || cssTheme.layout.var.contentWidth.desktopMaxWidth}
          >
            {children}
          </Center>
        }
        {...props}
      />
    );
  }
);
