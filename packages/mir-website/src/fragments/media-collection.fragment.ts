import { graphql } from 'gatsby';

export const mediaCollectionQuery = graphql`
  fragment MediaCollection on ContentfulMediaCollection {
    name
    type
    variant
    size
    medias {
      file {
        url
      }
    }
    title
  }
`;
