import { graphql } from 'gatsby';

export const linkFragment = graphql`
  fragment LinkFragment on ContentfulLink {
    name
    type
    page {
      id
      name
      route
    }
    section {
      id
      name
    }
  }
`;
