import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IndexPageEnQuery } from '../../types/graphql-types';
import { LayoutEN } from '../layouts/en';
import { Index } from '../templates/index-page.template';

export const query = graphql`
  query indexPageEN {
    ...SiteMetadata
    bannerImageMobile: file(name: { eq: "ImageOffice05" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice05" }) {
      ...DesktopFluidImage
    }
    gcms {
      indexPages(first: 1, locales: en) {
        ...IndexPage
      }
    }
  }
`;

export interface PageProps {
  data: IndexPageEnQuery;
  location: Location;
}

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <LayoutEN>
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
    </LayoutEN>
  );
};

export default IndexPage;
