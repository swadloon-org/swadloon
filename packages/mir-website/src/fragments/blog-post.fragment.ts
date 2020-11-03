import { graphql } from 'gatsby';

export const blogPostQuery = graphql`
  fragment BlogPost on ContentfulBlogPost {
    node_locale
    subtitle
    title
    blogSlug
    blogExcerpt {
      blogExcerpt
    }
    createdAt
    updatedAt
    blogMainImage {
      file {
        url
      }
      socialMediaImage: resize(width: 1200) {
        src
        width
        height
      }
      fluid(maxWidth: 1600) {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
      }
    }
    blogAuthor {
      firstName
      lastName
      jobTitle
      profilePicture {
        file {
          url
        }
      }
    }
    content {
      childMdx {
        tableOfContents
        slug
        body
      }
    }
  }
`;
