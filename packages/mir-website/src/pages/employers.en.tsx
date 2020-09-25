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
import { EmployerPageEnQuery } from '../../types/graphql-types';
import { EmployerPageTemplate } from '../templates/employer-page.template';

export const employerPageENQuery = graphql`
  query EmployerPageEN {
    site {
      ...SiteMetadata
    }
    graphCmsCompanyInfo {
      ...CompanyInfo
    }
    allGraphCmsPage(name: { eq: "Employers" }, filter: { locale: { in: [en, fr] } }) {
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
  data: EmployerPageEnQuery;
  location: Location;
}

const EmployerPage: React.FC<PageProps> = (props) => {
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
      <EmployerPageTemplate {...props} />
    </Layout>
  );
};

export default EmployerPage;
