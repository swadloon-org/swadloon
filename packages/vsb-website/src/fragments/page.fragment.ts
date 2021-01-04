import { graphql } from 'gatsby';

export const pageQuery = graphql`
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
    type {
      type
    }
    sections {
      ...Section
      subSections {
        ...Section
      }
    }
  }
`;
