import { graphql } from 'gatsby';

export const blockFragment = graphql`
  fragment Block on ContentfulBlock {
    id
    name
    variant
    type
    text {
      text
      childMdx {
        body
      }
    }
    medias {
      name
      medias {
        media {
          id
          ...DesktopFluidImage
        }
        backgroundPositionY
      }
    }
    link {
      type
      page {
        slug
      }
      label
    }
  }
`;
