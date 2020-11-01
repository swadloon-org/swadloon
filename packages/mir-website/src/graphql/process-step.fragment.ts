import { graphql } from 'gatsby';

export const processStepQuery = graphql`
  fragment ProcessStep on ContentfulProcessStep {
    steps {
      title
      description {
        childMdx {
          body
        }
      }
    }
  }
`;
