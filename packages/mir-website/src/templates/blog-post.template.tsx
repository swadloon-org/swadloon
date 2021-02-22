import LogoFramed from '!!file-loader!../images/LogoFramedTextDefault.svg';
import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from '@newrade/core-react-ui-old';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { helmetJsonLdProp } from 'react-schemaorg';
import { Article, Organization } from 'schema-dts';
import { GatsbyBlogPostMIRContext } from '../../types/gatsby-types';
import { BlogPostPageQuery } from '../../types/graphql-types';
import '../fonts';
import { BlogPostArticleTemplate } from './blog-post-article.template';

export type ProjectPageProps = PageProps<BlogPostPageQuery, GatsbyBlogPostMIRContext>;

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
  if (!data) {
    return null;
  }

  const { contentfulCompanyInfo, site, contentfulBlogPost } = data;

  return (
    <>
      <Helmet
        script={[
          helmetJsonLdProp<Organization>({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: `${contentfulCompanyInfo?.companyName}`,
            url: `${site?.siteMetadata?.siteUrl}`,
            logo: {
              '@type': 'ImageObject',
              url: LogoFramed,
            },
          }),
          helmetJsonLdProp<Article>({
            '@context': 'https://schema.org',
            '@type': 'Article',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${site?.siteMetadata?.siteUrl}`,
            },
            headline: `${contentfulBlogPost?.title}`,
            image: [`${contentfulBlogPost?.blogMainImage?.socialMediaImage?.src}`],
            datePublished: `${contentfulBlogPost?.createdAt}`,
            dateModified: `${contentfulBlogPost?.updatedAt}`,
            author: {
              '@type': 'Organization',
              name: `${contentfulBlogPost?.blogAuthor?.[0]?.firstName} ${contentfulBlogPost?.blogAuthor?.[0]?.lastName}`,
            },
            publisher: {
              '@type': 'Organization',
              name: `${contentfulCompanyInfo?.companyName}`,
              logo: {
                '@type': 'ImageObject',
                url: LogoFramed,
              },
            },
          }),
        ]}
      >
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.ARTICLE,
          title: `${contentfulBlogPost?.title}`,
          url: `${site?.siteMetadata?.siteUrl}${contentfulBlogPost?.blogSlug}`,
          description: `${contentfulBlogPost?.blogExcerpt?.blogExcerpt}`,
          image: `${contentfulBlogPost?.blogMainImage?.socialMediaImage?.src}`,
          site_name: `${contentfulCompanyInfo?.metadataSiteName}`,
          lang: contentfulBlogPost?.node_locale?.includes('fr') ? 'fr' : 'en',
          locale: contentfulBlogPost?.node_locale?.includes('fr') ? 'fr_CA' : 'en_CA',
          localeAlternate: contentfulBlogPost?.node_locale?.includes('en') ? 'fr_CA' : 'en_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary_large_image',
          image: `${contentfulBlogPost?.blogMainImage?.socialMediaImage?.src}`,
          creator: `${contentfulCompanyInfo?.metadataTwitterCreator}`,
          site: `${contentfulCompanyInfo?.metadataTwitterSite}`,
        })}
      </Helmet>
      {contentfulBlogPost ? <BlogPostArticleTemplate {...contentfulBlogPost} /> : null}
    </>
  );
};

export default BlogPostTemplate;
