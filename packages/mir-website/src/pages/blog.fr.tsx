import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPageFrQuery } from '../../types/graphql-types';
import { LayoutFR } from '../layouts/fr';
import { Blog } from '../templates/blog-page.template';

export const query = graphql`
  query blogPageFR {
    bannerImage: file(name: { eq: "ImageOffice03" }) {
      id
      childImageSharp {
        # https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
        fluid(quality: 90, maxWidth: 1920) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
    gcms {
      blogPages(first: 1, locales: fr) {
        ...BlogPage
      }
      metadataWebsites(first: 1) {
        siteName
        siteUrl
      }
      metadataTwitters(first: 1) {
        creator
        site
      }
    }
  }
`;

export interface BlogProps {
  data: BlogPageFrQuery;
  location: Location;
}

const BlogPage: React.FC<BlogProps> = (props) => {
  return (
    <LayoutFR>
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.blogPages[0].metadata?.title}`,
          url: `${props.data.gcms.metadataWebsites[0].siteUrl}${props.data.gcms.blogPages[0].metadata?.route}`,
          description: `${props.data.gcms.blogPages[0].metadata?.description}`,
          site_name: `${props.data.gcms.metadataWebsites[0].siteName}`,
          locale: 'fr_CA',
          localeAlternate: 'en_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.gcms.metadataTwitters[0].creator}`,
          site: `${props.data.gcms.metadataTwitters[0].site}`,
        })}
      </Helmet>
      <Blog {...props} />
    </LayoutFR>
  );
};

export default BlogPage;
