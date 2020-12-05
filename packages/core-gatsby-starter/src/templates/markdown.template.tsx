import { GatsbyPageContext } from '@newrade/core-gatsby-config';
import { getMetaBasicTags, getMetadataOpenGraphWebsiteTags } from '@newrade/core-react-ui-old';
import { PageProps } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Helmet from 'react-helmet';

export type MarkdownPageProps = PageProps<{}, GatsbyPageContext>;

/**
 * Markdown template to render documentation
 * @param props
 */
const Page: React.FC<MarkdownPageProps> = (props) => {
  return (
    <div>
      <Helmet>
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
      </Helmet>
      <pre>{JSON.stringify(props.params)}</pre>
      <pre>{JSON.stringify(props.location)}</pre>
      <pre>{JSON.stringify(props.data)}</pre>
      <pre>{JSON.stringify(props.pageContext)}</pre>
      <MDXRenderer></MDXRenderer>
    </div>
  );
};

export default Page;
