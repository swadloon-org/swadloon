import { GatsbyLinkProps, Link as GastbyLinkDefault } from 'gatsby';
import React from 'react';
import * as styleRefs from './gatsby-link.treat';
import { useStyles } from 'react-treat';

type Props = Omit<GatsbyLinkProps<any>, 'to'> & {
  noStyles?: boolean;
  to: string | undefined | null; // allow our wrapper to accept empty strings
};

export const GatsbyLink = React.forwardRef<any, Props>(
  ({ id, style, className, noStyles, to = '', ...props }, ref) => {
    const { styles } = useStyles(styleRefs);
    const mergedClassName = `${styles.wrapper} ${noStyles ? styles.noStyles : ''} ${
      className || ''
    }`;
    return (
      <GastbyLinkDefault
        ref={ref as any}
        id={id}
        style={style}
        to={to || ''}
        {...props}
        className={mergedClassName}
      />
    );
  }
);
