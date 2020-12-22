import { graphql } from 'gatsby';

export const siteMetadataFragment = graphql`
  fragment SiteMetadata on Site {
    siteMetadata {
      title
      description
      siteUrl
      siteEnv
      languages {
        defaultLangKey
        langs
      }
    }
  }
`;
