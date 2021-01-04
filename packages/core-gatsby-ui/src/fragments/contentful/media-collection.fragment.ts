import { graphql } from 'gatsby';

export const mediaCollectionFragment = graphql`
  fragment MediaCollection on ContentfulMediaCollection {
    name
    # title
    # type
    # variant
    # size
    medias {
      file {
        url
      }
      ...MobileFluidImage
    }
  }
`;
