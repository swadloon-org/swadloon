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
import { EmployerPageFrQuery } from '../../types/graphql-types';
import { EmployerPageTemplate } from '../templates/employer-page.template';

export const employerPageFRQuery = graphql`
  query EmployerPageFR {
    site {
      ...SiteMetadata
    }
    graphCmsCompanyInfo {
      ...CompanyInfo
    }
    graphCmsPage(name: { eq: "Employers" }, locale: { in: [fr, en] }) {
      ...Page
    }
    routes: graphCmsPage(name: { ne: "Not Found" }, locale: { in: [fr, en] }) {
      name
      title
      route
    }
    bannerImageMobile: file(name: { eq: "ImageOffice04" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice04" }) {
      ...DesktopFluidImage
    }
  }
`;

interface PageProps {
  data: EmployerPageFrQuery;
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
      <EmployerPageTemplate {...props} />
    </Layout>
  );
};

export default EmployerPage;
