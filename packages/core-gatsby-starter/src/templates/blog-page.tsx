import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { SitePageContext } from '../../types/graphql-types';
import { PageProps } from 'gatsby';

type Props = PageProps & {
  data: any;
  pageContext: any;
};

const BlogPage: React.FC<Props> = ({ pageContext }) => {
  return (
    <div>
      <MDXRenderer>{pageContext.content.markdownNode.childMdx.body}</MDXRenderer>
    </div>
  );
};

export default BlogPage;
