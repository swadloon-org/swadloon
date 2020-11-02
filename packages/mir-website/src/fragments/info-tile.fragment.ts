import { graphql } from 'gatsby';

export const infoTileQuery = graphql`
  fragment InfoTileFragment on ContentfulInfoTile {
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
