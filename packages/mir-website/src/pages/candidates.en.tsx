import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { CandidatePageEnQuery } from '../../types/graphql-types';
import { LayoutEN } from '../layouts/en';
import { Candidate } from '../templates/candidates-page.template';

export const query = graphql`
  query CandidatePageEN {
    site {
      ...SiteMetadata
    }
    gcms {
      companyInfos(first: 1) {
        ...CompanyInfo
      }
      pages(where: { name: "Candidates" }, locales: en) {
        ...Page
      }
    }
    bannerImageMobile: file(name: { eq: "ImageOffice02" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice02" }) {
      ...DesktopFluidImage
    }
  }
`;

interface PageProps {
  data: CandidatePageEnQuery;
  location: Location;
}

const CandidatePage: React.FC<PageProps> = (props) => {
  return (
    <LayoutEN>
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.candidatePages[0].metadata?.title}`,
          url: `${props.data.gcms.metadataWebsites[0].siteUrl}${props.data.gcms.candidatePages[0].metadata?.route}`,
          description: `${props.data.gcms.candidatePages[0].metadata?.description}`,
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
      <Candidate {...props} />
    </LayoutEN>
  );
};

export default CandidatePage;
