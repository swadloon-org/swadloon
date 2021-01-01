import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

export const markdownComponents = {
  h1: (props: any) => <h1 {...props}></h1>,
  h2: (props: any) => <h2 {...props}></h2>,
  h3: (props: any) => <h3 {...props}></h3>,
  p: (props: any) => <p {...props}></p>,
  a: (props: any) => <GatsbyLink {...props}></GatsbyLink>,
};
