import { graphql } from 'gatsby';

export const linkFragment = graphql`
  fragment LinkFragment on ContentfulLink {
    name
    type
    label
    # url
    page {
      id
      name
      slug
    }
    # section {
    #   id
    #   name
    # }
  }
`;
