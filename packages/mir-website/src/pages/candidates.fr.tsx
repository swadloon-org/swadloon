import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CandidatePageFrQuery } from '../../types/graphql-types';
import { LayoutFR } from '../layouts/fr';
import { Candidate } from '../templates/candidates-page.template';

export const query = graphql`
  query CandidatePageFR {
    site {
      ...SiteMetadata
    }

    bannerImage: file(name: { eq: "ImageOffice02" }) {
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
      candidatePages(first: 1, locales: fr) {
        ...CandidatePage
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

export interface CandidatesPageProps {
  data: CandidatePageFrQuery;
  location: Location;
}

const CandidatePage: React.FC<CandidatesPageProps> = (props) => {
  return (
    <LayoutFR>
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.candidatePages[0].metadata?.title}`,
          url: `${props.data.gcms.metadataWebsites[0].siteUrl}${props.data.gcms.candidatePages[0].metadata?.route}`,
          description: `${props.data.gcms.candidatePages[0].metadata?.description}`,
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
      <Candidate {...props} />
    </LayoutFR>
  );
};

export default CandidatePage;
