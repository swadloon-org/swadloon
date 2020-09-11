import { graphql } from 'gatsby';

export const query = graphql`
  fragment BlogSections on GraphCMS_BlogSection {
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
`;
