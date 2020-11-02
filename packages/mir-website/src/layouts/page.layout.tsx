import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from '@newrade/core-react-ui-old';
import Helmet from 'react-helmet';
import { graphql, PageProps } from 'gatsby';
import React, { useState } from 'react';
import { TreatProvider, useStyles } from 'react-treat';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { SideBar } from '../components/side-bar';
import { ViewportProvider } from '../context/viewport.context';
import { light } from '../design-system/themes.treat';
import { viewportContext } from '../hooks/use-viewport.hook';
import '../styles/font-faces.styles.css';
import { Index } from '../templates/index-page.template';
import * as styleRefs from './page.treat';
import { GatsbyPageContext } from '@newrade/core-gatsby-config';
import { PageQuery } from '../../types/graphql-types';

export type ProjectPageProps = PageProps<PageQuery, GatsbyPageContext>;

export const pageQuery = graphql`
  query Page($pageId: String) {
    site {
      ...SiteMetadata
    }
    contentfulCompanyInfo {
      logo {
        file {
          url
        }
        fluid {
          srcSet
        }
      }
      twitterPageURL
      id
    }
    contentfulPage(id: { eq: $pageId }) {
      id
      name
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

// const IndexPage: React.FC<PageProps> = (props) => {
//   return (
//     <PageLayout
//       location={props.location}
//       logoURL={props.data.gcms.companyInfos[0].logo?.url}
//       linkedinPageURL={props.data.gcms.companyInfos[0].linkedinPageUrl}
//       facebookPageURL={props.data.gcms.companyInfos[0].facebookPageUrl}
//       instagramPageURL={props.data.gcms.companyInfos[0].instagramPageUrl}
//       twitterPageURL={props.data.gcms.companyInfos[0].twitterPageUrl}
//       pages={props.data.gcms.routes}
//     >
//       <Index {...props} />
//     </PageLayout>
//   );
// };

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
        <LayoutComponent {...props} />
      </TreatProvider>
    </ViewportProvider>
  );
};

const LayoutComponent: React.FC<ProjectPageProps> = (props) => {
  const styles = useStyles(styleRefs);
  const [sideMenuState, setSideMenuState] = useState<'opened' | 'closed'>('closed');

  function onOpenSideMenu() {
    setSideMenuState(sideMenuState === 'opened' ? 'closed' : 'opened');
  }

  return (
    <>
      <SideBar
        className={`${styles.sidebar}`}
        state={sideMenuState}
        onOpenSideMenu={onOpenSideMenu}
        {...props}
      ></SideBar>
      <div className={`${sideMenuState === 'opened' ? styles.open : styles.close}`}>
        <NavBar onOpenSideMenu={onOpenSideMenu} {...props}></NavBar>
        {props.children}
        <Footer></Footer>
      </div>
    </>
  );
};

export default PageLayout;
