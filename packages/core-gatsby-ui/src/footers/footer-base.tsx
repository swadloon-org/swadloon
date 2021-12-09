import React from 'react';

import { Level, Variant } from '@newrade/core-design-system';
import { Center, Primitive, useTreatTheme } from '@newrade/core-react-ui';
import { globalThemeReversed } from '@newrade/core-react-ui/global';

import { FooterProps } from './footer.props';

import * as styles from './footer-base.css';

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
    const variant = footer?.variant || Variant.primary;

    /**
     * Styling
     */

    const { cssTheme } = useTreatTheme();

    const variantClass = styles[variant];
    const isReversed = colorMode === 'reversed';

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
