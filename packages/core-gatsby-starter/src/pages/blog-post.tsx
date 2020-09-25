import { graphql } from 'gatsby';
import React from 'react';

import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/react';

export const query = graphql`
  query BlogPost {
    graphCmsBlogPost {
      content
    }
  }
`;

type Props = {
  location: Location;
  data: any;
};

export const BlogPost: React.FC<Props> = (props) => {
  return <div>{/* <MDXRenderer>{node.code.body}</MDXRenderer> */}</div>;
};

export default BlogPost;
