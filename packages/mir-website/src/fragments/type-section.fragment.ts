import { graphql } from 'gatsby';

export const sectionTypeFragment = graphql`
  fragment sectionType on ContentfulSectionType {
    name
    preview {
      file {
        url
      }
    }
    description {
      description
      childMdx {
        body
      }
    }
  }
`;
