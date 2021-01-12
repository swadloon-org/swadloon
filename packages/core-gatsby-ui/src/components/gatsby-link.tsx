import { GatsbyLinkProps, Link as GastbyLinkDefault } from 'gatsby';
import React from 'react';
import * as styleRefs from './gatsby-link.treat';
import { useStyles } from 'react-treat';

type Props = GatsbyLinkProps<any>;

export const GatsbyLink = React.forwardRef<any, Props>(({ id, style, className, ...props }, ref) => {
  const { styles } = useStyles(styleRefs);
  const mergedClassName = `${styles.wrapper} ${className || ''}`;
  return <GastbyLinkDefault ref={ref as any} id={id} style={style} {...props} className={mergedClassName} />;
});
