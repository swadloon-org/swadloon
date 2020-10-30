import { graphql } from 'gatsby';

export const companyInfoQuery = graphql`
  fragment CompanyInfo on ContentfulCompanyInfo {
    companyName
    linkedinPageURL
    facebookPageURL
    instagramPageURL
    twitterPageURL
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
    metadataTwitterSite
    metadataTwitterCreator
    metadataSiteName
  }
`;
