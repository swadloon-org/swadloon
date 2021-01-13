import { GatsbyLinkProps, Link as GastbyLinkDefault } from 'gatsby';
import React from 'react';
import * as styleRefs from './gatsby-link.treat';
import { useStyles } from 'react-treat';

type Props = GatsbyLinkProps<any> & {
  noStyles?: boolean;
};

export const GatsbyLink = React.forwardRef<any, Props>(({ id, style, className, noStyles, ...props }, ref) => {
  const { styles } = useStyles(styleRefs);
  const mergedClassName = `${styles.wrapper} ${noStyles ? styles.noStyles : ''} ${className || ''}`;
  return <GastbyLinkDefault ref={ref as any} id={id} style={style} {...props} className={mergedClassName} />;
});
