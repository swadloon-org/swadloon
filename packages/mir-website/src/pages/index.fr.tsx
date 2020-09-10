import { MetaBasic, MetadataOpenGraphWebsite, MetadataTwitter, OPEN_GRAPH_TYPE } from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { IndexPageFrQuery } from '../../types/graphql-types';
import { LayoutFR } from '../layouts/fr';
import '../styles/font-faces.styles.css';
import { Index } from '../templates/index-page.template';

export const query = graphql`
  query indexPageFR {
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
        <MetaBasic />
        <MetadataOpenGraphWebsite type={OPEN_GRAPH_TYPE.WEBSITE} />
        <MetadataTwitter card={'summary'} />
      </Helmet>
      <Index {...props} />
    </LayoutFR>
  );
};

export default IndexPage;
