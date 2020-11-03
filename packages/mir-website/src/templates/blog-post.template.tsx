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
import { BlogPostQuery } from '../../types/graphql-types';
import { ViewportProvider } from '../context/viewport.context';
import { light } from '../design-system/themes.treat';
import { viewportContext } from '../hooks/use-viewport.hook';
import '../styles/font-faces.styles.css';

export type ProjectPageProps = PageProps<BlogPostQuery, GatsbyBlogPostContext>;

export const blogPostQuery = graphql`
  query BlogPost($blogPostId: String) {
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
      node_locale
      subtitle
      title
      blogSlug
      blogExcerpt {
        blogExcerpt
      }
      createdAt
      updatedAt
      blogMainImage {
        file {
          url
        }
        socialMediaImage: resize(width: 1200) {
          src
          width
          height
        }
        fluid(maxWidth: 1600) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      blogAuthor {
        firstName
        lastName
        profilePicture {
          file {
            url
          }
        }
      }
      content {
        childMdx {
          tableOfContents
          slug
          body
        }
      }
    }
  }
`;

export const BlogPostTemplate: React.FC<ProjectPageProps> = ({ data, location, ...props }) => {
  return (
    <TreatProvider theme={light}>
      <ViewportProvider context={viewportContext}>
        <Helmet>
          {getMetaBasicTags()}
          {getMetadataOpenGraphWebsiteTags({
            type: OPEN_GRAPH_TYPE.ARTICLE,
            title: `${data.contentfulBlogPost.title}`,
            url: `${data.site?.siteMetadata?.siteUrl}${data.contentfulBlogPost?.blogSlug}`,
            description: `${data.contentfulBlogPost?.blogExcerpt.blogExcerpt}`,
            image: `${data.contentfulBlogPost?.blogMainImage.socialMediaImage.src}`,
            site_name: `${data.contentfulCompanyInfo.metadataSiteName}`,
            lang: data.contentfulBlogPost.node_locale.includes('fr') ? 'fr' : 'en',
            locale: data.contentfulBlogPost.node_locale.includes('fr') ? 'fr_CA' : 'en_CA',
            localeAlternate: data.contentfulBlogPost.node_locale.includes('en') ? 'fr_CA' : 'en_CA',
          })}
          {getMetadataTwitterTags({
            card: 'summary_large_image',
            image: `${data.contentfulBlogPost?.blogMainImage.socialMediaImage.src}`,
            creator: `${data.contentfulCompanyInfo.metadataTwitterCreator}`,
            site: `${data.contentfulCompanyInfo.metadataTwitterSite}`,
          })}
        </Helmet>
        <div>{data.contentfulBlogPost.title}</div>
      </ViewportProvider>
    </TreatProvider>
  );
};

export default BlogPostTemplate;
