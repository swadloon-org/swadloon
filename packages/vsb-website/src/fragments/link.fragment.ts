import { graphql } from 'gatsby';

export const linkFragment = graphql`
  fragment Link on ContentfulLink {
    name
    type
    label
    url
    page {
      id
      name
      slug
    }
  }
`;
