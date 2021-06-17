import { graphql } from 'gatsby';

export const blockSolutionFragment = graphql`
  fragment BlockSolution on ContentfulBlockSolution {
    id
    variant
    type
    alignment
    text {
      text
      childMdx {
        body
      }
    }
  }
`;
