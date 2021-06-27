import { graphql } from 'gatsby';

export const companyInfoFragment = graphql`
  fragment CompanyInfo on ContentfulCompanyInfo {
    companyName
    linkedinPageURL
    facebookPageURL
    instagramPageURL
    twitterPageURL
    metadataTwitterSite
    metadataTwitterCreator
    metadataSiteName
    copyright
  }
`;
