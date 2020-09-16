import { graphql } from 'gatsby';

export const siteMetadataQuery = graphql`
  fragment SiteMetadata on Site {
    siteMetadata {
      languages {
        defaultLangKey
        langs
      }
    }
  }
`;
