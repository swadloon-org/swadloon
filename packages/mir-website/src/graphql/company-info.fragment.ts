import { graphql } from 'gatsby';

export const siteMetadataQuery = graphql`
  fragment CompanyInfo on GraphCMS_CompanyInfos {
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
