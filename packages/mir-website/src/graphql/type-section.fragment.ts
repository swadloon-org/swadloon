import { graphql } from 'gatsby';

export const sectionTypeQuery = graphql`
  fragment sectionType on ContentfulSectionType {
    name
    preview {
      file {
        url
      }
    }
    description {
      childMdx {
        body
      }
    }
  }
`;
