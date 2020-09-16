import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { LayoutEN } from '../layouts/en';
import { AboutPageEnQuery } from '../../types/graphql-types';
import { About } from '../templates/about-page.template';

export const query = graphql`
  query AboutPageEN {
    site {
      ...SiteMetadata
    }
    gcms {
      companyInfos(first: 1) {
        ...CompanyInfo
      }
      pages(where: { name: "About" }, locales: en) {
        ...Page
      }
    }
    bannerImageMobile: file(name: { eq: "ImageOffice01" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice01" }) {
      ...DesktopFluidImage
    }
  }
`;

interface PageProps {
  data: AboutPageEnQuery;
  location: Location;
}

const AboutPage: React.FC<PageProps> = (props) => {
  return (
    <LayoutEN>
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.aboutPages[0].metadata?.title}`,
          url: `${props.data.gcms.metadataWebsites[0].siteUrl}${props.data.gcms.aboutPages[0].metadata?.route}`,
          description: `${props.data.gcms.aboutPages[0].metadata?.description}`,
          site_name: `${props.data.gcms.metadataWebsites[0].siteName}`,
          locale: 'en_CA',
          localeAlternate: 'fr_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.gcms.metadataTwitters[0].creator}`,
          site: `${props.data.gcms.metadataTwitters[0].site}`,
        })}

        <meta charSet="utf-8" />
        <title>MIR - Recrutement technique - Employeurs</title>
        <link rel="canonical" href="https://mir-website-master.netlify.com" />
      </Helmet>
      <About {...props} />
    </LayoutEN>
  );
};

export default AboutPage;
