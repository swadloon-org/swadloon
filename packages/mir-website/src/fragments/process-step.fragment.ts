import { graphql } from 'gatsby';

export const processStepQuery = graphql`
  fragment ProcessStepFragment on ContentfulProcessStep {
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
