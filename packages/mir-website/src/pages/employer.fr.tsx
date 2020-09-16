import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LayoutFR } from '../layouts/fr';
import { EmployerPageFrQuery } from '../../types/graphql-types';
import { Employer } from '../templates/employer-page.template';

// bannerImage: file(name: { eq: "ImageOffice04" }) {
//     id
//     childImageSharp {
//       # https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-sharp/src/fragments.js
//       fluid(quality: 90, maxWidth: 1920) {
//         base64
//         aspectRatio
//         src
//         srcSet
//         srcWebp
//         srcSetWebp
//         sizes
//       }
//     }
//   }

// bannerImageMobile: file(name: { eq: "ImageOffice04" }) {
//     ...MobileFluidImage
//   }
//   bannerImageDesktop: file(name: { eq: "ImageOffice04" }) {
//     ...DesktopFluidImage
//   }

export const query = graphql`
  query EmployerPageFR {
    site {
      ...SiteMetadata
    }

    bannerImage: file(name: { eq: "ImageOffice04" }) {
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

    gcms {
      employerPages(first: 1, locales: fr) {
        ...EmployerPage
      }
      metadataWebsites(first: 1) {
        siteName
        siteUrl
      }
      metadataTwitters(first: 1) {
        creator
        site
      }
    }
  }
`;

export interface EmployerProps {
  data: EmployerPageFrQuery;
  location: Location;
}

const EmployerPage: React.FC<EmployerProps> = (props) => {
  return (
    <LayoutFR>
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.employerPages[0].metadata?.title}`,
          url: `${props.data.gcms.metadataWebsites[0].siteUrl}${props.data.gcms.employerPages[0].metadata?.route}`,
          description: `${props.data.gcms.employerPages[0].metadata?.description}`,
          site_name: `${props.data.gcms.metadataWebsites[0].siteName}`,
          locale: 'fr_CA',
          localeAlternate: 'en_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.gcms.metadataTwitters[0].creator}`,
          site: `${props.data.gcms.metadataTwitters[0].site}`,
        })}

        <meta charSet="utf-8" />
        <title>MIR - Recrutement technique - Employeurs</title>
        <link rel="canonical" href="https://mir-website-master.netlify.com" />
      </Helmet>
      <Employer {...props} />
    </LayoutFR>
  );
};

export default EmployerPage;
