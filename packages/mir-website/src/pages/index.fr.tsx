import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { IndexPageFrQuery } from '../../types/graphql-types';
import { LayoutFR } from '../layouts/fr';
import { Index } from '../templates/index-page.template';

export const query = graphql`
  query IndexPageFR {
    site {
      ...SiteMetadata
    }
    gcms {
      companyInfos(first: 1) {
        ...CompanyInfo
      }
      pages(where: { name: "Home" }, locales: fr) {
        ...Page
      }
    }
    bannerImageMobile: file(name: { eq: "ImageOffice05" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice05" }) {
      ...DesktopFluidImage
    }
  }
`;

interface PageProps {
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
          title: `${props.data.gcms.pages[0].metadata?.title}`,
          url: `${props.data.gcms.metadataWebsites[0].siteUrl}${props.data.gcms.pages[0].metadata?.route}`,
          description: `${props.data.gcms.pages[0].metadata?.description}`,
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
      <Index {...props} />
    </LayoutFR>
  );
};

export default IndexPage;
