import { GatsbySrcPageContext, GatsbyMarkdownFilePageContext } from '@newrade/core-gatsby-config';
import { PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Helmet from 'react-helmet';
import { GatsbyNodeSiteMetadataFragment, MarkdownTemplateQuery } from '../../types/graphql-types';
import { graphql } from 'gatsby';
import { DEPLOY_ENV } from '@newrade/core-env';
import { DebugGasbyPage } from '../components/debug-gatsby-page';

export type MarkdownTemplateProps = PageProps<
  MarkdownTemplateQuery,
  GatsbyMarkdownFilePageContext<GatsbyNodeSiteMetadataFragment>
>;

/**
 * Query to retrieve all markdown content for the markdown file
 */
export const markdownTemplateQuery = graphql`
  query MarkdownTemplate($fileId: String) {
    file(id: { eq: $fileId }, ext: { in: [".md", ".mdx"] }) {
      id
      name
      base
      ext
      dir
      absolutePath
      publicURL
      size
      sourceInstanceName
      childMdx {
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
  }
`;

/**
 * Markdown template to render .mdx? files (e.g. documentation)
 */
const Page: React.FC<MarkdownTemplateProps> = (props) => {
  return (
    <div>
      {props.pageContext.siteMetadata?.siteEnv === DEPLOY_ENV.LOCAL ? <DebugGasbyPage {...props} /> : null}
      {/* <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
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
        })}
      </Helmet> */}
      <MDXRenderer>{props.data.file?.childMdx?.body as string}</MDXRenderer>
    </div>
  );
};

export default Page;
