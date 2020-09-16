import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { LayoutEN } from '../src/layouts/en';
import { EmployerPageEnQuery } from '../types/graphql-types';
import { Employer } from '../src/templates/employer-page.template';

export const query = graphql`
  query EmployerPageEN {
    query
    EmployerPageFR {
      site {
        ...SiteMetadata
      }
      gcms {
        companyInfos(first: 1) {
          ...CompanyInfo
        }
        pages(where: { name: "Employers" }, locales: en) {
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
  }
`;

interface PageProps {
  data: EmployerPageEnQuery;
  location: Location;
}

const EmployerPage: React.FC<PageProps> = (props) => {
  return (
    <LayoutEN>
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.employerPages[0].metadata?.title}`,
          url: `${props.data.gcms.metadataWebsites[0].siteUrl}${props.data.gcms.employerPages[0].metadata?.route}`,
          description: `${props.data.gcms.employerPages[0].metadata?.description}`,
          site_name: `${props.data.gcms.metadataWebsites[0].siteName}`,
          locale: 'en_CA',
          localeAlternate: 'fr_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.gcms.metadataTwitters[0].creator}`,
          site: `${props.data.gcms.metadataTwitters[0].site}`,
        })}
      </Helmet>
      <Employer {...props} />
    </LayoutEN>
  );
};

export default EmployerPage;
