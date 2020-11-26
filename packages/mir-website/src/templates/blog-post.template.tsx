import { MDXProvider } from '@mdx-js/react';
import { GatsbyBlogPostContext } from '@newrade/core-gatsby-config';
import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from '@newrade/core-react-ui-old';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { TreatProvider } from 'react-treat';
import { BlogPostPageQuery } from '../../types/graphql-types';
import { markdownComponents } from '../components/markdown/components-markdown';
import { ViewportProvider } from '../context/viewport.context';
import { light } from '../design-system/themes.treat';
import { viewportContext } from '../hooks/use-viewport.hook';
import { Layout } from '../layouts/page.layout';
import '../styles/font-faces.styles.css';
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
          route
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
    <MDXProvider components={markdownComponents}>
      <TreatProvider theme={light}>
        <ViewportProvider context={viewportContext}>
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
          <Layout
            currentPageName={data?.contentfulBlogPost?.title as string | PAGE_NAME}
            location={location}
            logoURL={data?.contentfulCompanyInfo?.logo?.file?.url as string | null}
            linkedinPageURL={data?.contentfulCompanyInfo?.linkedinPageURL as string | null}
            facebookPageURL={data?.contentfulCompanyInfo?.facebookPageURL as string | null}
            instagramPageURL={data?.contentfulCompanyInfo?.instagramPageURL as string | null}
            twitterPageURL={data?.contentfulCompanyInfo?.twitterPageURL as string | null}
            pages={data?.allContentfulPage?.edges?.map((edge) => ({
              ...edge?.node,
              locale: edge?.node?.node_locale,
            }))}
          >
            <BlogPostArticleTemplate {...data?.contentfulBlogPost} />
          </Layout>
        </ViewportProvider>
      </TreatProvider>
    </MDXProvider>
  );
};

export default BlogPostTemplate;
