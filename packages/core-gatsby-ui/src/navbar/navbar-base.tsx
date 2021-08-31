import { Variant } from '@newrade/core-design-system';
import { Center, Primitive, useTreatTheme } from '@newrade/core-react-ui';
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
  ({ contentClassName, navbar = defaultProps.navbar, children, ...props }, ref) => {
    const variant = navbar?.variant;
    /**
     * Styling
     */
    const { cssTheme } = useTreatTheme();
    const styles = useStyles(styleRefs);

    return (
      <Primitive
        ref={ref}
        variant={variant}
        classNames={[styles.wrapper, variant ? styles[variant] : '']}
        AsElement={
          <Center
            as={'nav'}
            contentClassName={contentClassName}
            maxWidth={cssTheme.layout.var.contentWidth.desktopMaxWidth}
          >
            {children}
          </Center>
        }
        {...props}
      />
    );
  }
);
