import { graphql } from 'gatsby';

export const query = graphql`
  fragment IndexPage on GraphCMS_IndexPage {
    bannerTitle
    bannerSubTitle
    infoSections {
      ...InfoSections
    }
    blogSection {
      id
      title
      titleHighlight
      text
      actionLabel
      posts {
        id
        createdAt
        title
        image {
          url(transformation: { image: { resize: { width: 300, fit: max } } })
        }
      }
    }
  }
`;
