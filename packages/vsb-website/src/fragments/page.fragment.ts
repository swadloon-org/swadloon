import { graphql } from 'gatsby';

export const pageFragment = graphql`
  fragment PageFragment on ContentfulPage {
    id
    name
    node_locale
    description {
      description
      childMdx {
        body
      }
    }
    title
    slug
    sections {
      ...Section
    }
  }
`;
