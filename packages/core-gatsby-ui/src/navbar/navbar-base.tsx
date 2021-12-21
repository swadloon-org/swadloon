import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { Center, Primitive, useThemeElevationBG } from '@newrade/core-react-ui';
import { layoutVars } from '@newrade/core-react-ui/theme';

import { NavbarProps } from './navbar.props';

import * as styles from './navbar-base.css';

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
      style,
      contentClassName,
      navbar = defaultProps.navbar,
      navbarMode = 'fixed',
      maxWidth,
      currentLanguage,
      languages,
      colorMode,
      children,
      ...props
    },
    ref
  ) => {
    const variant = navbar?.variant || Variant.primary;
    /**
     * Styling
     */
    // const variantClass = styles[variant];

    const elevationBG = useThemeElevationBG({ level: 2 });

    return (
      <Primitive
        ref={ref}
        style={{ ...style, backgroundColor: elevationBG }}
        variant={variant}
        classNames={[styles.wrapper, styles[navbarMode]]}
        AsElement={
          <Center
            as={'nav'}
            contentClassName={contentClassName}
            maxWidth={maxWidth || layoutVars.var.contentWidth.desktopMaxWidth}
          >
            {children}
          </Center>
        }
        {...props}
      />
    );
  }
);
