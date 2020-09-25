import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from '@newrade/core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '../layouts';
import { AboutPageEnQuery } from '../../types/graphql-types';
import { About } from '../templates/about-page.template';

export const query = graphql`
  query AboutPageEN {
    site {
      ...SiteMetadata
    }
    graphCmsCompanyInfo {
      ...CompanyInfo
    }
    allGraphCmsPage(name: { eq: "About" }, filter: { locale: { in: [en, fr] } }) {
      nodes {
        ...Page
      }
    }
    routes: allGraphCmsPage(name: { ne: "Not Found" }, filter: { locale: { in: [en, fr] } }) {
      nodes {
        ...PageRoute
      }
    }
  }
`;

interface PageProps {
  data: AboutPageEnQuery;
  location: Location;
}

const AboutPage: React.FC<PageProps> = (props) => {
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
          lang: 'en',
          locale: 'en_CA',
          localeAlternate: 'fr_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.graphCmsCompanyInfo[0].metadataTwitterCreator}`,
          site: `${props.data.graphCmsCompanyInfo[0].metadataTwitter}`,
        })}
      </Helmet>
      <About {...props} />
    </Layout>
  );
};

export default AboutPage;
