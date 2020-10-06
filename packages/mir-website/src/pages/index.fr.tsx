import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  OPEN_GRAPH_TYPE,
  getMetadataTwitterTags,
} from '@newrade/core-react-ui-old';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import React from 'react';
import { IndexPageFrQuery } from '../../types/graphql-types';
import { Index } from '../templates/index-page.template';
import { Layout } from '../layouts';

export const indexPageFRQuery = graphql`
  query IndexPageFR {
    site {
      ...SiteMetadata
    }
    gcms {
      companyInfos(first: 1) {
        ...CompanyInfo
      }
      pages(where: { name: "Home" }, locales: [fr, en]) {
        ...Page
      }
      routes: pages(where: { NOT: { name: "Not Found" } }, locales: [fr, en]) {
        name
        title
        route
      }
    }
    bannerImageMobile: file(name: { eq: "ImageOffice05" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice05" }) {
      ...DesktopFluidImage
    }
  }
`;

interface PageProps {
  data: IndexPageFrQuery;
  location: Location;
}

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <Layout
      location={props.location}
      logoURL={props.data.gcms.companyInfos[0].logo?.url}
      linkedinPageURL={props.data.gcms.companyInfos[0].linkedinPageUrl}
      facebookPageURL={props.data.gcms.companyInfos[0].facebookPageUrl}
      instagramPageURL={props.data.gcms.companyInfos[0].instagramPageUrl}
      twitterPageURL={props.data.gcms.companyInfos[0].twitterPageUrl}
      pages={props.data.gcms.routes}
    >
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.pages[0]?.title}`,
          url: `${props.data.site?.siteMetadata?.siteUrl}${props.data.gcms.pages[0]?.route}`,
          description: `${props.data.gcms.pages[0]?.description}`,
          image: `${props.data.gcms.pages[0]?.bannerImages[0]?.url}`,
          site_name: `${props.data.gcms.companyInfos[0].metadataSiteName}`,
          lang: 'fr',
          locale: 'fr_CA',
          localeAlternate: 'en_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.gcms.companyInfos[0].metadataTwitterCreator}`,
          site: `${props.data.gcms.companyInfos[0].metadataTwitter}`,
        })}
      </Helmet>
      <Index {...props} />
    </Layout>
  );
};

export default IndexPage;
