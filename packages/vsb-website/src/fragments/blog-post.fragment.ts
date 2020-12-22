import { graphql } from 'gatsby';

export const blogPostQuery = graphql`
  fragment BlogPost on ContentfulBlogPost {
    node_locale

    id
    slug
    title
    subtitle

    blogExcerpt {
      blogExcerpt
    }
    createdAt
    updatedAt

    medias {
      medias {
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
    }
    blogAuthor {
      firstName
      lastName
      profilePicture {
        file {
          url
        }
      }
    }
    text {
      childMdx {
        tableOfContents
        slug
        body
      }
    }

    tags {
      name
      description {
        description
      }
      type {
        name
        description {
          description
        }
      }
    }
  }
`;
