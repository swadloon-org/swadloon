import { graphql } from 'gatsby';

export const fullPageFragment = graphql`
  fragment Page on GraphCMS_Page {
    name
    title
    description
    route
    bannerTitle
    bannerSubTitle
    bannerImages {
      bannerImageMobile: localFile {
        ...MobileFluidImage
      }
      bannerImageDesktop: localFile {
        ...DesktopFluidImage
      }
    }
    actionSections {
      ...ActionSection
    }
    infoSections {
      ...InfoSections
    }
    blogSections {
      ...BlogSections
    }
    jobSections {
      ...JobSections
    }
    processSections {
      ...ProcessSections
    }
    testimonialSections {
      ...TestimonialSection
    }
  }
`;

export const pageRouteFragment = graphql`
  fragment PageRoute on GraphCMS_Page {
    name
    title
    route
  }
`;
