import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NotFoundPageFrQuery } from '../../types/graphql-types';
import Layout from '../layouts';

export const query = graphql`
  query NotFoundPageFR {
    site {
      ...SiteMetadata
    }
    bannerImageMobile: file(name: { eq: "ImageOffice05" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice05" }) {
      ...DesktopFluidImage
    }
    gcms {
      notFoundPages(first: 1, locales: fr) {
        ...NotFoundPage
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

export interface PageProps {
  data: NotFoundPageFrQuery;
  location: Location;
}

const NotFoundPage: React.FC<PageProps> = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>test</title>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: 'test',
          url: 'test',
          description: 'test',
          site_name: 'test',
          locale: 'test',
          localeAlternate: 'test',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
        })}
      </Helmet>
      <div>Not Found</div>
    </Layout>
  );
};

export default NotFoundPage;
