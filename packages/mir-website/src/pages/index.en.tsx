import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { IndexPageEnQuery } from '../../types/graphql-types';
import { LayoutEN } from '../layouts/en';
import '../styles/font-faces.styles.css';
import { Index } from '../templates/index-page.template';

export const query = graphql`
  query indexPageEN {
    bannerImageMobile: file(name: { eq: "ImageOffice05" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice05" }) {
      ...DesktopFluidImage
    }
    gcms {
      indexPages(first: 1, locales: en) {
        ...IndexPage
      }
    }
  }
`;

export interface PageProps {
  data: IndexPageEnQuery;
  location: Location;
}

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <LayoutEN>
      <Helmet>
        <html lang="en" />
        <meta name="description" content="Description de la page d'accueil" />
        <title>MIR - English</title>
      </Helmet>
      <Index {...props} />
    </LayoutEN>
  );
};

export default IndexPage;
