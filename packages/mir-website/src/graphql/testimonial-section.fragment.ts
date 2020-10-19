import { graphql } from 'gatsby';

export const testimonialSectionQuery = graphql`
  fragment TestimonialSection on ContentfulTestimonialSection {
    title
    titleHighlight
    description{
      childMdx {
        body
      }
    }
    testomonials {
      message{
        childMdx {
          body
        }
      }
      authorName
      authorTitle
    }
  }
`;
