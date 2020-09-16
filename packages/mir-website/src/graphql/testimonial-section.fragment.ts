import { graphql } from 'gatsby';

export const query = graphql`
  fragment TestimoialSection on GraphCMS_TestimoialSection {
    title
    titleHighlight
    description
    testomonials {
      message
      authorName
      authorTitle
    }
  }
`;
