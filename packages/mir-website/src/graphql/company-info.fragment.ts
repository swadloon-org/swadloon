import { graphql } from 'gatsby';

export const companyInfoQuery = graphql`
  fragment CompanyInfo on GraphCMS_CompanyInfo {
    companyName
    linkedinPageUrl
    facebookPageUrl
    instagramPageUrl
    twitterPageUrl
    logo {
      fileName
      url
    }
    logoFooter {
      fileName
      url
    }
    metadataTwitter
    metadataTwitterCreator
    metadataSiteName
  }
`;
