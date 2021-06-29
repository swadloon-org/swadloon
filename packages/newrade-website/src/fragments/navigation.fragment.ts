import { graphql } from 'gatsby';

export const navigationFragment = graphql`
  fragment NavigationFragment on ContentfulNavigation {
    id
    name
    component
    label
    links {
      ...LinkFragment
    }
    subNavigation {
      id
      name
      component
      label
      links {
        ...LinkFragment
      }
      subNavigation {
        id
        name
        component
        label
        links {
          ...LinkFragment
        }
      }
    }
  }
`;
