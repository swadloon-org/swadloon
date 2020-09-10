import { graphql } from 'gatsby';

export const query = graphql`
  fragment BlogPage on GraphCMS_BlogPage {
    metadata {
      title
      description
      route
    }
    bannerTitle
    blogSection {
      ...BlogSections
    }
  }
`;
