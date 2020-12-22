import { graphql } from 'gatsby';

export const siteMetadataFragment = graphql`
  fragment SiteMetadata1 on Site {
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
