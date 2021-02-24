import { graphql } from 'gatsby';

export const sectionFragment = graphql`
  fragment Section on ContentfulSection {
    id
    node_locale
    name
    variant
    blocks {
      ... on ContentfulBlock {
        id
        name
        text {
          childMdx {
            body
          }
        }
      }
      ... on ContentfulBlockCostItem {
        id
      }
    }
  }
`;
