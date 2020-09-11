import { graphql } from 'gatsby';

export const query = graphql`
  fragment NotFoundPage on GraphCMS_NotFoundPage {
    metadata {
      title
      description
      route
    }
    bannerTitle
  }
`;
