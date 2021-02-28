import { graphql } from 'gatsby';

export const blockFragment = graphql`
  fragment Block on ContentfulBlock {
    id
    name
    variant
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
