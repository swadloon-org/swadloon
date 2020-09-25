import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  OPEN_GRAPH_TYPE,
  getMetadataTwitterTags,
} from '@newrade/core-react-ui';
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
    graphCmsCompanyInfo {
      ...CompanyInfo
    }
    allGraphCmsPage(name: { eq: "Home" }, filter: { locale: { in: [fr, en] } }) {
      nodes {
        ...Page
      }
    }
    routes: allGraphCmsPage(name: { ne: "Not Found" }, filter: { locale: { in: [fr, en] } }) {
      nodes {
        ...PageRoute
      }
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
      logoURL={props.data.graphCmsCompanyInfo[0].logo?.url}
      linkedinPageURL={props.data.graphCmsCompanyInfo[0].linkedinPageUrl}
      facebookPageURL={props.data.graphCmsCompanyInfo[0].facebookPageUrl}
      instagramPageURL={props.data.graphCmsCompanyInfo[0].instagramPageUrl}
      twitterPageURL={props.data.graphCmsCompanyInfo[0].twitterPageUrl}
      pages={props.data.routes}
    >
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.allGraphCmsPage[0]?.title}`,
          url: `${props.data.site?.siteMetadata?.siteUrl}${props.data.allGraphCmsPage[0]?.route}`,
          description: `${props.data.allGraphCmsPage[0]?.description}`,
          image: `${props.data.allGraphCmsPage[0]?.bannerImages[0]?.url}`,
          site_name: `${props.data.graphCmsCompanyInfo[0].metadataSiteName}`,
          lang: 'fr',
          locale: 'fr_CA',
          localeAlternate: 'en_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.graphCmsCompanyInfo[0].metadataTwitterCreator}`,
          site: `${props.data.graphCmsCompanyInfo[0].metadataTwitter}`,
        })}
      </Helmet>
      <Index {...props} />
    </Layout>
  );
};

export default IndexPage;
