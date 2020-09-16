import { graphql } from 'gatsby';

export const query = graphql`
  fragment IndexPage on GraphCMS_IndexPage {
    metadata {
      title
      description
      route
    }
    bannerTitle
    bannerSubTitle
    infoSections {
      ...InfoSections
    }
    blogSection {
      ...BlogSections
    }
  }
`;
