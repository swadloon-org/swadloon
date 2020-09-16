import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { LayoutFR } from '../layouts/fr';
import { EmployerPageFrQuery } from '../../types/graphql-types';
import { Employer } from '../templates/employer-page.template';

export const query = graphql`
  query EmployerPageFR {
    site {
      ...SiteMetadata
    }
    gcms {
      companyInfos(first: 1) {
        ...CompanyInfo
      }
      pages(where: { name: "Employers" }, locales: fr) {
        ...Page
      }
    }
    bannerImageMobile: file(name: { eq: "ImageOffice04" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice04" }) {
      ...DesktopFluidImage
    }
  }
`;

interface PageProps {
  data: EmployerPageFrQuery;
  location: Location;
}

const EmployerPage: React.FC<PageProps> = (props) => {
  return (
    <LayoutFR>
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.employerPages[0].metadata?.title}`,
          url: `${props.data.gcms.metadataWebsites[0].siteUrl}${props.data.gcms.employerPages[0].metadata?.route}`,
          description: `${props.data.gcms.employerPages[0].metadata?.description}`,
          site_name: `${props.data.gcms.metadataWebsites[0].siteName}`,
          locale: 'fr_CA',
          localeAlternate: 'en_CA',
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
      <Employer {...props} />
    </LayoutFR>
  );
};

export default EmployerPage;
