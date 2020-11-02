import { graphql } from 'gatsby';

export const jobGroupQuery = graphql`
  fragment JobGroup on ContentfulJobGroup {
    typeName
    variant
    jobs {
      title
      description
    }
  }
`;
