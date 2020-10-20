import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from '@newrade/core-react-ui-old';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '../layouts';
import { AboutPageFrQuery } from '../../types/graphql-types';
import { About } from '../templates/about-page.template';

export const AboutPageFRQuery = graphql`
  query AboutPageFR {
    site {
      ...SiteMetadata
    }
    allContentfulCompanyInfo(filter: { name: { eq: "Home" }, node_locale: { eq: "fr-CA" } }) {
      ...CompanyInfo
    }
    allContentfulPage(filter: { name: { eq: "Home" }, node_locale: { eq: "fr-CA" } }) {
      ...Page
    }
    bannerImageMobile: file(name: { eq: "ImageOffice01" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice01" }) {
      ...DesktopFluidImage
    }
    bannerImageAboutMobile: file(name: { eq: "Banner-A-propos" }) {
      ...MobileFluidImage
    }
    bannerImageAboutDesktop: file(name: { eq: "Banner-A-propos" }) {
      ...DesktopFluidImage
    }
  }
`;

interface PageProps {
  data: AboutPageFrQuery;
  location: Location;
}

const AboutPage: React.FC<PageProps> = (props) => {
  return (
    <Layout
      location={props.location}
      logoURL={props.data.allContentfulCompanyInfo[0].logo?.url}
      linkedinPageURL={props.data.allContentfulCompanyInfo[0].linkedinPageUrl}
      facebookPageURL={props.data.allContentfulCompanyInfo[0].facebookPageUrl}
      instagramPageURL={props.data.allContentfulCompanyInfo[0].instagramPageUrl}
      twitterPageURL={props.data.allContentfulCompanyInfo[0].twitterPageUrl}
      // pages={props.data.gcms.routes}
    >
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.allContentfulPage[0]?.title}`,
          url: `${props.data.site?.siteMetadata?.siteUrl}${props.data.allContentfulPage[0]?.route}`,
          description: `${props.data.allContentfulPage[0]?.description}`,
          image: `${props.data.allContentfulPage[0]?.bannerImages[0]?.url}`,
          site_name: `${props.data.allContentfulCompanyInfos[0].metadataSiteName}`,
          lang: 'fr',
          locale: 'fr_CA',
          localeAlternate: 'en_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.allContentfulCompanyInfo[0].metadataTwitterCreator}`,
          site: `${props.data.allContentfulCompanyInfo[0].metadataTwitter}`,
        })}
      </Helmet>
      <About {...props} />
    </Layout>
  );
};

export default AboutPage;
