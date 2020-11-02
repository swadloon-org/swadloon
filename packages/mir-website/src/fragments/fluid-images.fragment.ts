import { graphql } from 'gatsby';

export const fluidImageQuery = graphql`
  fragment MobileFluidImage on File {
    id
    childImageSharp {
      # https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
      fluid(quality: 90, maxWidth: 800) {
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

  fragment DesktopFluidImage on File {
    id
    childImageSharp {
      # https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
      fluid(quality: 90, maxWidth: 1920) {
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
`;
