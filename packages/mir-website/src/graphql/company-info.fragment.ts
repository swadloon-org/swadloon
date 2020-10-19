import { graphql } from 'gatsby';

export const companyInfoQuery = graphql`
  fragment CompanyInfo on ContentfulCompanyInfo {
    companyName
    linkedinPageUrl
    facebookPageUrl
    instagramPageUrl
    twitterPageUrl
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
