import { graphql } from 'gatsby';

export const companyAddressFragment = graphql`
  fragment CompanyAddress on ContentfulCompanyAddress {
    name
    phone
    email
    city
    postalCode
    provinceState
    websiteURL
    addressLine1
    fax
  }
`;
