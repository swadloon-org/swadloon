import { graphql } from 'gatsby';

export const processStepQuery = graphql`
  fragment ProcessStep on ContentfulProcessStep {
    id
    title
    description {
      description
      childMdx {
        body
      }
    }
  }
`;
