import React from 'react';

import { Variant } from '@newrade/core-design-system';

import { useCSSTheme } from '../hooks/use-css-theme';
import { Center } from '../layout/center';
import { Primitive } from '../primitive/primitive';
import { layoutVars } from '../theme';

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
      contentClassName,
      navbar = defaultProps.navbar,
      navbarMode = 'fixed',
      maxWidth,
      currentLanguage,
      languages,
      children,
      ...props
    },
    ref
  ) => {
    const { getCSSColorModeClassnames } = useCSSTheme();
    const variant = navbar?.variant || Variant.primary;
    const colorModeClassnames = getCSSColorModeClassnames({
      colorMode: navbar?.colorMode,
      colorScheme: navbar?.colorScheme,
    });
    return (
      <Primitive
        ref={ref}
        variant={variant}
        classNames={[colorModeClassnames, styles.wrapper, styles[navbarMode]]}
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
