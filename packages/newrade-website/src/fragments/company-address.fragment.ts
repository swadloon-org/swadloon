import { graphql } from 'gatsby';

export const companyAddressFragment = graphql`
  fragment CompanyAddressFragment on ContentfulCompanyAddress {
    name
    email
    city
    postalCode
    provinceState
    websiteURL
    addressLine1
  }
`;
