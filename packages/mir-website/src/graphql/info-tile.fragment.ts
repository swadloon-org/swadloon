import { graphql } from 'gatsby';

export const infoTileQuery = graphql`
  fragment InfoTile on ContentfulInfoTile {
    steps {
      title
      description {
        childMdx {
          body
        }
      }
    }
  }
`;
