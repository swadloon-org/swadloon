import { graphql } from 'gatsby';

export const query = graphql`
  fragment ContactPage on GraphCMS_ContactUsPage {
    metadata {
      title
      description
      route
    }
    bannerTitle
    infoSections {
      ...InfoSections
    }
  }
`;
