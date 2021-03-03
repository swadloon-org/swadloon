import { graphql } from 'gatsby';

export const blockGoogleMapsFragment = graphql`
  fragment BlockGoogleMaps on ContentfulBlockGoogleMap {
    id
    name
    type
    placeId
    lat
    long
    zoom
  }
`;
