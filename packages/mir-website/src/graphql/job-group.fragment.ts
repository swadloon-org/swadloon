import { graphql } from 'gatsby';

export const jobGroupQuery = graphql`
  fragment JobGroup on ContentfulJobGroup {
    typeName
    variant
    Jobs {
      title
      description {
        childMdx {
          body
        }
      }
    }
  }
`;
