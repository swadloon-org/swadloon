import { graphql } from 'gatsby';

export const query = graphql`
  fragment CandidatePage on GraphCMS_CandidatePage {
    metadata {
      title
      description
      route
    }

    bannerTitle
    actionSections {
      title
      subtitle
      actionText
    }
    jobSection {
      ...JobSections
    }

    infoSections {
      ...InfoSections
    }

    processSection {
      ...ProcessSections
    }
  }
`;
