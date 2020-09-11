import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from 'core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { ContactPageEnQuery } from '../../types/graphql-types';
import { LayoutEN } from '../layouts/en';
import { Contact } from '../templates/contact-page.template';

export const query = graphql`
  query contactPageEN {
    bannerImage: file(name: { eq: "ImageOffice03" }) {
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
      contactUsPages(first: 1, locales: en) {
        ...ContactPage
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

export interface ContactProps {
  data: ContactPageEnQuery;
  location: Location;
}

const ContactPage: React.FC<ContactProps> = (props) => {
  return (
    <LayoutEN>
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.contactUsPages[0].metadata?.title}`,
          url: `${props.data.gcms.metadataWebsites[0].siteUrl}${props.data.gcms.contactUsPages[0].metadata?.route}`,
          description: `${props.data.gcms.contactUsPages[0].metadata?.description}`,
          site_name: `${props.data.gcms.metadataWebsites[0].siteName}`,
          locale: 'en_CA',
          localeAlternate: 'fr_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.gcms.metadataTwitters[0].creator}`,
          site: `${props.data.gcms.metadataTwitters[0].site}`,
        })}
      </Helmet>
      <Contact {...props} />
    </LayoutEN>
  );
};

export default ContactPage;
