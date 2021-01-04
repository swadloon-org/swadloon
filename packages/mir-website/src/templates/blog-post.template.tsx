import { MDXProvider } from '@mdx-js/react';
import { GatsbyBlogPostContext } from '@newrade/core-gatsby-config';
import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from '@newrade/core-react-ui-old';
import { Article, Organization } from 'schema-dts';
import { helmetJsonLdProp } from 'react-schemaorg';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { TreatProvider } from 'react-treat';
import { BlogPostPageQuery } from '../../types/graphql-types';
import { mdxComponents } from '../components/markdown/components-markdown';
import { ViewportProvider } from '../context/viewport.context';
import { light } from '../design-system/theme.treat';
import { viewportContext } from '../hooks/use-viewport.hook';
import { Layout } from '../layouts/layout';
import '../fonts';

import { BlogPostArticleTemplate } from './blog-post-article.template';
import { PAGE_NAME } from './page.template';

export type ProjectPageProps = PageProps<BlogPostPageQuery, GatsbyBlogPostContext>;

export const blogPostQuery = graphql`
  query BlogPostPage($blogPostId: String) {
    site {
      ...SiteMetadata
    }
    contentfulCompanyInfo {
      ...CompanyInfo
    }
    allContentfulPage {
      edges {
        node {
          id
          name
          node_locale
          title
          description {
            description
          }
          slug
        }
      }
    }
    contentfulBlogPost(id: { eq: $blogPostId }) {
      ...BlogPost
    }
  }
`;

export const BlogPostTemplate: React.FC<ProjectPageProps> = ({ data, location, ...props }) => {
  return (
    <>
      <Helmet
        script={[
          helmetJsonLdProp<Organization>({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: `${data?.contentfulCompanyInfo?.companyName}`,
            url: `${data?.site?.siteMetadata?.siteUrl}`,
            logo: {
              '@type': 'ImageObject',
              url: `${data?.contentfulCompanyInfo?.logo?.file?.url}`,
            },
          }),
          helmetJsonLdProp<Article>({
            '@context': 'https://schema.org',
            '@type': 'Article',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${data?.site?.siteMetadata?.siteUrl}`,
            },
            headline: `${data?.contentfulBlogPost?.title}`,
            image: [`${data?.contentfulBlogPost?.blogMainImage?.socialMediaImage?.src}`],
            datePublished: `${data?.contentfulBlogPost?.createdAt}`,
            dateModified: `${data?.contentfulBlogPost?.updatedAt}`,
            author: {
              '@type': 'Organization',
              name: `${data?.contentfulBlogPost?.blogAuthor?.[0]?.firstName} ${data?.contentfulBlogPost?.blogAuthor?.[0]?.lastName}`,
            },
            publisher: {
              '@type': 'Organization',
              name: `${data?.contentfulCompanyInfo?.companyName}`,
              logo: {
                '@type': 'ImageObject',
                url: `${data?.contentfulCompanyInfo?.logo?.file?.url}`,
              },
            },
          }),
        ]}
      >
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
      {data.contentfulBlogPost ? <BlogPostArticleTemplate {...data.contentfulBlogPost} /> : null}
    </>
  );
};

export default BlogPostTemplate;
