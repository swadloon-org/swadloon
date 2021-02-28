import { graphql } from 'gatsby';

export const blockGoogleMapsFragment = graphql`
  fragment BlockGoogleMaps on ContentfulBlockGoogleMap {
    id
    name
    variant
    placeId
    lat
    long
    zoom
  }
`;
