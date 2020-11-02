import { graphql } from 'gatsby';

export const infoTileFragment = graphql`
  fragment InfoTile on ContentfulInfoTile {
    title
    illustration {
      description
      file {
        url
      }
    }
    text {
      text
    }
  }
`;
