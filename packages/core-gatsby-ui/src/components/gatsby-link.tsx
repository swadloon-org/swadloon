import { GatsbyLinkProps, Link as GastbyLinkDefault } from 'gatsby';
import React from 'react';

type Props = GatsbyLinkProps<any>;

export const GatsbyLink = React.forwardRef<any, Props>((props, ref) => {
  return <GastbyLinkDefault ref={ref as any} {...props} />;
});
