import { Variant } from '@newrade/core-design-system';
import { Center, Primitive, useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './footer-base.treat';
import { FooterProps } from './footer.props';

type Props = FooterProps & {
  contentClassName?: string;
};

const defaultProps: FooterProps = {
  footer: {
    variant: Variant.primary,
  },
};

export const FooterBase = React.forwardRef<HTMLElement, Props>(
  ({ contentClassName, footer = defaultProps.footer, children, ...props }, ref) => {
    const variant = footer?.variant;
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
            as={'footer'}
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
