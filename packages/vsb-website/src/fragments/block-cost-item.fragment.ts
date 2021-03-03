import { graphql } from 'gatsby';

export const blockCostItemFragment = graphql`
  fragment BlockCostItem on ContentfulBlockCostItem {
    id
    title
    variant
    type
    text {
      text
      childMdx {
        body
      }
    }
    priceText
  }
`;
