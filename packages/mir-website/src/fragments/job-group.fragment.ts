import { graphql } from 'gatsby';

export const jobGroupQuery = graphql`
  fragment JobGroupFragment on ContentfulJobGroup {
    typeName
    variant
    jobs {
      title
      description
    }
  }
`;
