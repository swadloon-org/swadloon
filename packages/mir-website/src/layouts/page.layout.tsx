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
import '../styles/font-faces.styles.css';
import { LayoutComponent } from './LayoutComponent';

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
    contentfulPage(id: { eq: $pageId }, node_locale: { eq: "fr-CA" }) {
      id
      name
      description {
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

export type NavigationProps = {
  location?: Location;
  logoURL?: string | null;
  linkedinPageURL?: string | null;
  facebookPageURL?: string | null;
  instagramPageURL?: string | null;
  twitterPageURL?: string | null;
  pages?: { title: string; route: string; name: string }[];
};

export const PageLayout: React.FC<ProjectPageProps> = (props) => {
  return (
    <ViewportProvider context={viewportContext}>
      <TreatProvider theme={light}>
        <Helmet>
          {getMetaBasicTags()}
          {getMetadataOpenGraphWebsiteTags({
            type: OPEN_GRAPH_TYPE.WEBSITE,
            title: `${props.data.contentfulPage.title}`,
            url: `${props.data.site?.siteMetadata?.siteUrl}${props.data.contentfulPage?.route}`,
            description: `${props.data.contentfulPage?.description}`,
            image: `${props.data.contentfulPage?.bannerImages[0]?.url}`,
            site_name: `${props.data.contentfulCompanyInfo.metadataSiteName}`,
            lang: 'fr',
            locale: 'fr_CA',
            localeAlternate: 'en_CA',
          })}
          {getMetadataTwitterTags({
            card: 'summary_large_image',
            image: `${props.data.contentfulPage?.bannerImages[0]?.url}`,
            creator: `${props.data.contentfulCompanyInfo.metadataTwitterCreator}`,
            site: `${props.data.contentfulCompanyInfo.metadataTwitterSite}`,
          })}
        </Helmet>
        <LayoutComponent {...props} />
      </TreatProvider>
    </ViewportProvider>
  );
};

export default PageLayout;
