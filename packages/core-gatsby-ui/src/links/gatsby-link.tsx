import { GatsbyLinkProps, Link as GastbyLinkDefault } from 'gatsby';
import React from 'react';

import { useCommonProps } from '@newrade/core-react-ui';

import * as styles from './gatsby-link.css';

type Props = Omit<GatsbyLinkProps<any>, 'to'> & {
  noStyles?: boolean;
  to: string | undefined | null; // allow our wrapper to accept empty strings
};

export const GatsbyLink = React.forwardRef<any, Props>(
  ({ id, style, className, noStyles, to = '', ...props }, ref) => {
    const commonProps = useCommonProps<any>({
      id,
      style,
      className,
      classNames: [styles.wrapper, noStyles ? styles.noStyles : ''],
    });

    return <GastbyLinkDefault ref={ref as any} to={to || ''} {...commonProps} {...props} />;
  }
);
