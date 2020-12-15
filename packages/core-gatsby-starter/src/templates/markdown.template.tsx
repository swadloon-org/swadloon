import { PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { DEPLOY_ENV } from '@newrade/core-common';
import { getMetaBasicTags } from '@newrade/core-react-ui';
import { GatsbyMarkdownFilePageContext, GatsbyNodeSiteMetadataFragment } from '@newrade/core-gatsby-config';
import { MarkdownTemplateQuery } from '../../types/graphql-types';
import { DebugGasbyPage } from '@newrade/core-gatsby-ui';
import * as styleRefs from './markdown.treat';
import { useStyles } from 'react-treat';

export type MarkdownTemplateProps = PageProps<
  MarkdownTemplateQuery,
  GatsbyMarkdownFilePageContext<GatsbyNodeSiteMetadataFragment>
>;

/**
 * Query to retrieve all markdown content for the markdown file
 */
export const markdownTemplateQuery = graphql`
  query MarkdownTemplate($slug: String!) {
    mdx(slug: { eq: $slug }) {
      slug
      excerpt(pruneLength: 160)
      frontmatter {
        title
        name
        tags
      }
      timeToRead
      headings {
        value
        depth
      }
      tableOfContents(maxDepth: 3)
      body
    }
  }
`;

/**
 * Markdown template to render .mdx? files (e.g. documentation)
 */
const Page: React.FC<MarkdownTemplateProps> = (props) => {
  const { styles } = useStyles(styleRefs);

  return (
    <div>
      {props.pageContext.siteMetadata?.siteEnv === DEPLOY_ENV.LOCAL ? <DebugGasbyPage {...props} /> : null}
      <Helmet>
        {getMetaBasicTags()}
        {/* {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.ARTICLE,
          title: `${data?.contentfulBlogPost?.title}`,
          url: `${data?.site?.siteMetadata?.siteUrl}${data?.contentfulBlogPost?.blogSlug}`,
          description: `${data?.contentfulBlogPost?.blogExcerpt?.blogExcerpt}`,
          image: `${data?.contentfulBlogPost?.blogMainImage?.socialMediaImage?.src}`,
          site_name: `${data?.contentfulCompanyInfo?.metadataSiteName}`,
          lang: data?.contentfulBlogPost?.node_locale?.includes('fr') ? 'fr' : 'en',
          locale: data?.contentfulBlogPost?.node_locale?.includes('fr') ? 'fr_CA' : 'en_CA',
          localeAlternate: data?.contentfulBlogPost?.node_locale?.includes('en') ? 'fr_CA' : 'en_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary_large_image',
          image: `${data?.contentfulBlogPost?.blogMainImage?.socialMediaImage?.src}`,
          creator: `${data?.contentfulCompanyInfo?.metadataTwitterCreator}`,
          site: `${data?.contentfulCompanyInfo?.metadataTwitterSite}`,
        })} */}
      </Helmet>
      <MDXRenderer {...props}>{props.data.mdx?.body as string}</MDXRenderer>

      <aside className={styles.aside}>
        {props.data.mdx?.headings?.map((heading) => (
          <div id={`link-${heading?.value}`} key={heading?.value}>
            <a href={`#${heading?.value}`}>{heading?.value}</a>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default Page;

function MDX(props: { children: string }) {
  return (
    <div className={'test'}>
      <MDXRenderer {...props}>{props.children}</MDXRenderer>
    </div>
  );
}
