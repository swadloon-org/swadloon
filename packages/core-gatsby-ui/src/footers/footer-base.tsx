import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { Center, Primitive } from '@newrade/core-react-ui';
import { layoutCSS } from '@newrade/core-react-ui/theme';

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
    { contentClassName, contentMaxWidth, footer = defaultProps.footer, children, ...props },
    ref
  ) => {
    const variant = footer?.variant || Variant.primary;

    /**
     * Styling
     */

    const variantClass = styles[variant];

    return (
      <Primitive
        ref={ref}
        variant={variant}
        classNames={[styles.wrapper, variantClass]}
        AsElement={
          <Center
            as={'footer'}
            contentClassName={contentClassName}
            maxWidth={contentMaxWidth || layoutCSS.var.contentWidth.desktopMaxWidth}
          >
            {children}
          </Center>
        }
        {...props}
      />
    );
  }
);
