import { graphql } from 'gatsby';

export const siteMetadataFragment = graphql`
  fragment SiteMetadata on Site {
    siteMetadata {
      title
      siteUrl
      languages {
        defaultLangKey
        langs
      }
    }
  }
`;
