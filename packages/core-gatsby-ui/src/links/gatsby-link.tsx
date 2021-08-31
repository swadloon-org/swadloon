import { useCommonProps } from '@newrade/core-react-ui';
import { GatsbyLinkProps, Link as GastbyLinkDefault } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './gatsby-link.treat';

type Props = Omit<GatsbyLinkProps<any>, 'to'> & {
  noStyles?: boolean;
  to: string | undefined | null; // allow our wrapper to accept empty strings
};

export const GatsbyLink = React.forwardRef<any, Props>(
  ({ id, style, className, noStyles, to = '', ...props }, ref) => {
    const { styles } = useStyles(styleRefs);
    const commonProps = useCommonProps<any>({
      id,
      style,
      className,
      classNames: [styles.wrapper, noStyles ? styles.noStyles : ''],
    });

    return <GastbyLinkDefault ref={ref as any} to={to || ''} {...commonProps} {...props} />;
  }
);
