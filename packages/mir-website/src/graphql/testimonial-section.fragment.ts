import { graphql } from 'gatsby';

export const testimonialSectionQuery = graphql`
  fragment TestimonialSection on GraphCMS_TestimonialSection {
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
