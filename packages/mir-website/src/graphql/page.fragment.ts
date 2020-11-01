import { graphql } from 'gatsby';

export const pageQuery = graphql`
  fragment Page on ContentfulPage {
    name
    description {
      childMdx {
        body
      }
    }
    title
    Route
    BannerTitle
    BannerSubTitle
    medias {
      ...MediaCollection
    }
    sections {
      ...Section
    }
  }
`;
