import { graphql } from 'gatsby';

export const jobGroupFragment = graphql`
  fragment JobGroup on ContentfulJobGroup {
    typeName
    variant
    jobs {
      title
      description
    }
  }
`;
