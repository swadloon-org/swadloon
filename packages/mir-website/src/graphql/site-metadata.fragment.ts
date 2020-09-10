import { graphql } from 'gatsby';

export const siteMetadataQuery = graphql`
  fragment SiteMetadata on Query {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
