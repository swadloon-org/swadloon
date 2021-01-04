import { graphql } from 'gatsby';

export const companyInfoFragment = graphql`
  fragment CompanyInfo on ContentfulCompanyInfo {
    companyName
    logo {
      file {
        url
      }
    }
    logoFooter {
      file {
        url
      }
    }
    linkedinPageURL
    facebookPageURL
    instagramPageURL
    twitterPageURL
    metadataTwitterSite
    metadataTwitterCreator
    metadataSiteName
  }
`;
