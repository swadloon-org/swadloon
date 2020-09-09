import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { IndexPageFrQuery } from '../../types/graphql-types';
import { LayoutFR } from '../layouts/fr';
import '../styles/font-faces.styles.css';
import { Index } from '../templates/index-page.template';

export const query = graphql`
  query indexPageFR {
    bannerImageMobile: file(name: { eq: "ImageOffice05" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice05" }) {
      ...DesktopFluidImage
    }
    gcms {
      indexPages(first: 1, locales: fr) {
        ...IndexPage
      }
    }
  }
`;

export interface PageProps {
  data: IndexPageFrQuery;
  location: Location;
}

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <LayoutFR>
      <Helmet>
        <html lang="fr" />

        <link rel="canonical" href="https://mir-website.netlify.com" />

        {/* 50-60 characters long */}
        <title>MIR - Recrutement technique - Accueil</title>

        {/* 150-160 characters long */}
        <meta name="description" content="Description de la page d'accueil" />

        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@publisher_handle" />
        <meta name="twitter:title" content="Page Title" />
        <meta name="twitter:description" content="Page description less than 200 characters" />
        <meta name="twitter:creator" content="@author_handle" />
        {/* Twitter summary card with large image must be at least 280x150px */}
        <meta name="twitter:image:src" content="http://www.example.com/image.jpg" />

        {/* Open Graph data */}
        <meta property="og:title" content="Title Here" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://www.example.com/" />
        <meta property="og:image" content="http://example.com/image.jpg" />
        <meta property="og:description" content="Description Here" />
        <meta property="og:site_name" content="Site Name, i.e. Moz" />
        <meta property="article:published_time" content="2013-09-17T05:59:00+01:00" />
        <meta property="article:modified_time" content="2013-09-16T19:08:47+01:00" />
        <meta property="article:section" content="Article Section" />
        <meta property="article:tag" content="Article Tag" />
        <meta property="fb:admins" content="Facebook numberic ID" />
      </Helmet>
      <Index {...props} />
    </LayoutFR>
  );
};

export default IndexPage;
