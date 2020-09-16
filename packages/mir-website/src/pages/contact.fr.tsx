import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { ContactPageFrQuery } from '../../types/graphql-types';
import { LayoutFR } from '../layouts/fr';
import { Contact } from '../templates/contact-page.template';

export const query = graphql`
  query ContactPageFR {
    site {
      ...SiteMetadata
    }
    gcms {
      companyInfos(first: 1) {
        ...CompanyInfo
      }
      pages(where: { name: "Contact" }, locales: fr) {
        ...Page
      }
    }
    bannerImageMobile: file(name: { eq: "ImageOffice03" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice03" }) {
      ...DesktopFluidImage
    }
  }
`;

interface PageProps {
  data: ContactPageFrQuery;
  location: Location;
}

const ContactPage: React.FC<PageProps> = (props) => {
  return (
    <LayoutFR>
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.contactUsPages[0].metadata?.title}`,
          url: `${props.data.gcms.metadataWebsites[0].siteUrl}${props.data.gcms.contactUsPages[0].metadata?.route}`,
          description: `${props.data.gcms.contactUsPages[0].metadata?.description}`,
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
      <Contact {...props} />
    </LayoutFR>
  );
};

export default ContactPage;
