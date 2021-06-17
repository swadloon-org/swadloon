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
    link {
      type
      page {
        slug
      }
      label
    }
  }
`;
