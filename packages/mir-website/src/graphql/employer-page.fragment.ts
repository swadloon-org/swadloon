import { graphql } from 'gatsby';

export const query = graphql`
  fragment EmployerPage on GraphCMS_EmployerPage {
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
