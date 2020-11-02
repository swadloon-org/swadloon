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
import '../styles/font-faces.styles.css';

export type ProjectPageProps = PageProps<PageQuery, GatsbyPageContext>;

export const pageQuery = graphql`
  query Page($pageId: String) {
    site {
      ...SiteMetadata
    }
    contentfulCompanyInfo {
      companyName
      linkedinPageURL
      facebookPageURL
      instagramPageURL
      twitterPageURL
      logo {
        file {
          url
        }
      }
      logoFooter {
        file {
          url
        }
      }
      metadataTwitterSite
      metadataTwitterCreator
      metadataSiteName
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
      id
      name
      node_locale
      description {
        description
        childMdx {
          body
        }
      }
      title
      route
      bannerTitle
      bannerSubTitle
      bannerImages {
        name
        medias {
          file {
            url
          }
        }
      }
      sections {
        id
        name
        description {
          description
          childMdx {
            body
          }
        }
        title
        titleHighlight
        titleTab
        type {
          id
          name
        }
        illustration {
          id
          title
          description
          file {
            url
          }
        }
        imagePosition
        infoTiles {
          title
        }
        processStep {
          id
          title
        }
      }
    }

    # allContentfulCompanyInfo(filter: { name: { eq: "Home" }, node_locale: { eq: "fr-CA" } }) {
    #   ...CompanyInfo
    # }
    # allContentfulPage(filter: { name: { eq: "Home" }, node_locale: { eq: "fr-CA" } }) {
    #   ...Page
    # }
    # bannerImageMobile: file(name: { eq: "ImageOffice05" }) {
    #   ...MobileFluidImage
    # }
    # bannerImageDesktop: file(name: { eq: "ImageOffice05" }) {
    #   ...DesktopFluidImage
    # }
  }
`;

export const PageTemplate: React.FC<ProjectPageProps> = ({ data, location }) => {
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
            image: `${data.contentfulPage?.bannerImages[0]?.url}`,
            site_name: `${data.contentfulCompanyInfo.metadataSiteName}`,
            lang: 'fr',
            locale: 'fr_CA',
            localeAlternate: 'en_CA',
          })}
          {getMetadataTwitterTags({
            card: 'summary_large_image',
            image: `${data.contentfulPage?.bannerImages[0]?.url}`,
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
          <div>hello</div>
        </Layout>
      </ViewportProvider>
    </TreatProvider>
  );
};

export default PageTemplate;
