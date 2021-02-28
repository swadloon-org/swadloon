import { graphql } from 'gatsby';

export const sectionFragment = graphql`
  fragment Section on ContentfulSection {
    id
    node_locale
    name
    variant
    layout
    blocks {
      ... on ContentfulBlock {
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
      ... on ContentfulBlockGoogleMap {
        id
        name
        variant
        placeId
        lat
        long
        zoom
      }
      ... on ContentfulBlockCostItem {
        id
        title
        text {
          text
          childMdx {
            body
          }
        }
        priceText
      }
    }
  }
`;
