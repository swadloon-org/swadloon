import React from 'react';

import { Variant } from '@newrade/core-design-system';

import { layoutVars } from '../default-theme/src/theme.js';
import { useCSSTheme } from '../hooks/use-css-theme.js';
import { Center } from '../layout/center.js';
import { Primitive } from '../primitive/primitive.js';

import { NavbarProps } from './navbar.props.js';
import * as styles from './navbar-base.css.js';

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
