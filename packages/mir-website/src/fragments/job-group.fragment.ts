import { graphql } from 'gatsby';

export const jobGroupFragment = graphql`
  fragment JobGroup on ContentfulJobGroup {
    typeName
    variant
    illustration {
      title
      file {
        url
      }
    }
    jobs {
      title
      description
    }
  }
`;
