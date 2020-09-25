import { graphql } from 'gatsby';

export const blogSectionsQuery = graphql`
  fragment BlogSections on GraphCMS_BlogSection {
    id
    title
    titleHighlight
    text
    actionLabel # to remove
    link {
      name
      label
      type
      url
      page {
        route
      }
    }
    posts {
      id
      # createdAt
      title
      image {
        bannerImageMobile: localFile {
          ...MobileFluidImage
        }
        bannerImageDesktop: localFile {
          ...DesktopFluidImage
        }
      }
    }
  }
`;
