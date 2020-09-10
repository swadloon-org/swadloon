import {
  getMetadataTwitterTags,
  getMetadataOpenGraphWebsiteTags,
  getMetaBasicTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IndexPageFrQuery } from '../../types/graphql-types';
import { LayoutFR } from '../layouts/fr';
import { Index } from '../templates/index-page.template';

export const query = graphql`
  query indexPageFR {
    ...SiteMetadata
    bannerImageMobile: file(name: { eq: "ImageOffice05" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice05" }) {
      ...DesktopFluidImage
    }
    gcms {
      indexPages(first: 1, locales: fr) {
        ...IndexPage
      }
    }
  }
`;

export interface PageProps {
  data: IndexPageFrQuery;
  location: Location;
}

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <LayoutFR>
      <Helmet>
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
      <Index {...props} />
    </LayoutFR>
  );
};

export default IndexPage;
