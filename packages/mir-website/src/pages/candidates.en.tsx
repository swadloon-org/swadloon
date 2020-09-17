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

export const CandidatePageENQuery = graphql`
  query CandidatePageEN {
    site {
      ...SiteMetadata
    }
    gcms {
      companyInfos(first: 1) {
        ...CompanyInfo
      }
      pages(where: { name: "Candidates" }, locales: [en, fr]) {
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
    <LayoutEN {...props}>
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.pages[0]?.title}`,
          url: `${props.data.site?.siteMetadata?.siteUrl}${props.data.gcms.pages[0]?.route}`,
          description: `${props.data.gcms.pages[0]?.description}`,
          image: `${props.data.gcms.pages[0]?.bannerImages[0]?.url}`,
          site_name: `${props.data.gcms.companyInfos[0].metadataSiteName}`,
          locale: 'en_CA',
          localeAlternate: 'fr_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.gcms.companyInfos[0].metadataTwitterCreator}`,
          site: `${props.data.gcms.companyInfos[0].metadataTwitter}`,
        })}
      </Helmet>
      <Candidate {...props} />
    </LayoutEN>
  );
};

export default CandidatePage;
