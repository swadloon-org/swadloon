import { GatsbyPageContext } from '@newrade/core-gatsby-config';
import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from '@newrade/core-react-ui-old';
import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { TreatProvider } from 'react-treat';
import { PageQuery } from '../../types/graphql-types';
import { ViewportProvider } from '../context/viewport.context';
import { light } from '../design-system/themes.treat';
import { viewportContext } from '../hooks/use-viewport.hook';
import { Layout } from '../layouts/page.layout';
import { BlogTemplate } from './blog.template';
import { ContactTemplate } from './contact.template';
import { HomeTemplate } from './home.template';

import '../styles/font-faces.styles.css';
import { NotFoundTemplate } from './not-found.template';

export type ProjectPageProps = PageProps<PageQuery, GatsbyPageContext>;

export const pageQuery = graphql`
  query Page($pageId: String) {
    site {
      ...SiteMetadata
    }
    contentfulCompanyInfo {
      ...CompanyInfo
    }
    allContentfulPage {
      edges {
        node {
          id
          name
          node_locale
          title
          description {
            description
          }
          route
        }
      }
    }
    contentfulPage(id: { eq: $pageId }) {
      ...PageFragment
    }
  }
`;

export enum PAGE_NAME {
  ACCUEIL = 'Accueil',
  CANDIDATS = 'Candidats',
  EMPLOYEURS = 'Employeurs',
  BLOGUE = 'Blogue',
  A_PROPOS = 'À propos',
  CONTACT = 'Contact',
  NON_TROUVE = 'Non trouvée',
}

export const PageTemplate: React.FC<ProjectPageProps> = ({ data, location, ...props }) => {
  return (
    <TreatProvider theme={light}>
      <ViewportProvider context={viewportContext}>
        <Helmet>
          {getMetaBasicTags()}
          {getMetadataOpenGraphWebsiteTags({
            type: OPEN_GRAPH_TYPE.WEBSITE,
            title: `${data.contentfulPage.title}`,
            url: `${data.site?.siteMetadata?.siteUrl}${data.contentfulPage?.route}`,
            description: `${data.contentfulPage?.description}`,
            image: `${data.contentfulPage?.bannerImages?.medias[0]?.file.url}`,
            site_name: `${data.contentfulCompanyInfo.metadataSiteName}`,
            lang: 'fr',
            locale: 'fr_CA',
            localeAlternate: 'en_CA',
          })}
          {getMetadataTwitterTags({
            card: 'summary_large_image',
            image: `${data.contentfulPage?.bannerImages?.medias[0]?.file.url}`,
            creator: `${data.contentfulCompanyInfo.metadataTwitterCreator}`,
            site: `${data.contentfulCompanyInfo.metadataTwitterSite}`,
          })}
        </Helmet>
        <Layout
          currentPageName={data.contentfulPage.name}
          location={location}
          logoURL={data.contentfulCompanyInfo.logo.file.url}
          linkedinPageURL={data.contentfulCompanyInfo.linkedinPageURL}
          facebookPageURL={data.contentfulCompanyInfo.facebookPageURL}
          instagramPageURL={data.contentfulCompanyInfo.instagramPageURL}
          twitterPageURL={data.contentfulCompanyInfo.twitterPageURL}
          pages={data.allContentfulPage.edges.map((edge) => ({
            ...edge.node,
            locale: edge.node.node_locale,
          }))}
        >
          {getPageTemplateComponent({ pageName: data.contentfulPage.name, props: { data, location, ...props } })}
        </Layout>
      </ViewportProvider>
    </TreatProvider>
  );
};

function getPageTemplateComponent({ pageName, props }: { pageName: string; props: ProjectPageProps }) {
  switch (pageName) {
    case PAGE_NAME.ACCUEIL: {
      return <HomeTemplate {...props} />;
    }
    case PAGE_NAME.CANDIDATS: {
      return <HomeTemplate {...props} />;
    }
    case PAGE_NAME.EMPLOYEURS: {
      return <HomeTemplate {...props} />;
    }
    case PAGE_NAME.BLOGUE: {
      return <BlogTemplate {...props} />;
    }
    case PAGE_NAME.A_PROPOS: {
      return <HomeTemplate {...props} />;
    }
    case PAGE_NAME.CONTACT: {
      return <ContactTemplate {...props} />;
    }
    case PAGE_NAME.NON_TROUVE: {
      return <NotFoundTemplate {...props} />;
    }
    default: {
      return <HomeTemplate {...props} />;
    }
  }
}

export default PageTemplate;
