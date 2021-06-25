import { graphql } from 'gatsby';

export const footerFragment = graphql`
  fragment FooterFragment on ContentfulFooter {
    name
    layout
    variant
    companyInfo {
      ...CompanyInfo
    }
    blocks {
      ...BlockFragment
    }
    navigation {
      ...NavigationFragment
    }
  }
`;
