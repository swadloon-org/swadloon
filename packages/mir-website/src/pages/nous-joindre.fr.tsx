import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from '@newrade/core-react-ui-old';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { ContactPageFrQuery } from '../../types/graphql-types';
import { Layout } from '../layouts';
import { Contact } from '../templates/contact-page.template';

export const ContactPageFRQuery = graphql`
  query ContactPageFR {
    site {
      ...SiteMetadata
    }
    allContentfulCompanyInfo(filter: { name: { eq: "Home" }, node_locale: { eq: "fr-CA" } }) {
      ...CompanyInfo
    }
    allContentfulPage(filter: { name: { eq: "Home" }, node_locale: { eq: "fr-CA" } }) {
      ...Page
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
    <Layout
      location={props.location}
      logoURL={props.data.gcms.companyInfos[0].logo?.url}
      linkedinPageURL={props.data.gcms.companyInfos[0].linkedinPageUrl}
      facebookPageURL={props.data.gcms.companyInfos[0].facebookPageUrl}
      instagramPageURL={props.data.gcms.companyInfos[0].instagramPageUrl}
      twitterPageURL={props.data.gcms.companyInfos[0].twitterPageUrl}
      pages={props.data.gcms.routes}
    >
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.pages[0]?.title}`,
          url: `${props.data.site?.siteMetadata?.siteUrl}${props.data.gcms.pages[0]?.route}`,
          description: `${props.data.gcms.pages[0]?.description}`,
          image: `${props.data.gcms.pages[0]?.bannerImages[0]?.url}`,
          site_name: `${props.data.gcms.companyInfos[0].metadataSiteName}`,
          lang: 'fr',
          locale: 'fr_CA',
          localeAlternate: 'en_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.gcms.companyInfos[0].metadataTwitterCreator}`,
          site: `${props.data.gcms.companyInfos[0].metadataTwitter}`,
        })}
      </Helmet>
      <Contact {...props} />
    </Layout>
  );
};

export default ContactPage;
