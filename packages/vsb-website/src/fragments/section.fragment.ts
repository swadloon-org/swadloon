import { graphql } from 'gatsby';

export const sectionFragment = graphql`
  fragment Section on ContentfulSection {
    id
    node_locale
    name
    variant
    layout
    blocks {
      ...BlockFragment
      ...BlockGoogleMaps
      ...BlockCostItem
    }
  }
`;
