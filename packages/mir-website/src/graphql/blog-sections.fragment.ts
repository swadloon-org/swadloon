import { graphql } from 'gatsby';

export const blogSectionsQuery = graphql`
  fragment BlogSections on ContentfulBlogSection {
    id
    title
    titleHighlight
    text {
      text
    }
    link {
      type
      name
      label
      url
    }
    posts {
      id
      createdAt
      title
      subtitle
      excerpt
      markdown {
        childMdx {
          body
        }
      }
      image {
        file {
          url
        }
      }
      authors{
        fullName
        jobTitle
        profilePicture {
          file {
            url
          }
        }
      }
    }
  }
`;
