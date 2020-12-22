import { graphql } from 'gatsby';

export const blogPostQuery = graphql`
  fragment BlogPost on ContentfulBlogPost {
    node_locale
    subtitle
    id
    title
    blogSlug
    blogExcerpt {
      blogExcerpt
    }
    createdAt
    updatedAt
    featured
    blogMainImage {
      file {
        url
      }
      thumbnail: fluid(maxWidth: 300) {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
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
