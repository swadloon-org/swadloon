import { graphql } from 'gatsby';

export const blockFragment = graphql`
  fragment BlockFragment on ContentfulBlock {
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
