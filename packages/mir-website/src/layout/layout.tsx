import LogoFramed from '!!file-loader!../images/LogoFramedReversed.svg';
import { globalHistory } from '@reach/router';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React, { ReactNode, useEffect, useState } from 'react';
import { useStyles } from 'react-treat';
import { NavigationQuery } from '../../types/graphql-types';
import { Footer } from '../components/navigation/footer';
import { NavBar } from '../components/navigation/nav-bar';
import { SideBar } from '../components/navigation/side-bar';
import { PAGE_NAME } from '../templates/page.template';
import * as styleRefs from './layout.treat';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

const query = graphql`
  query Navigation {
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
          type {
            type
          }
          node_locale
          title
          description {
            description
          }
          slug
        }
      }
    }
  }
`;

export const Layout: React.FC<LayoutProps> = (props) => {
  const styles = useStyles(styleRefs);
  const data = useStaticQuery<NavigationQuery>(query);
  const [sideMenuState, setSideMenuState] = useState<'opened' | 'closed'>('closed');

  function onOpenSideMenu(state?: 'opened' | 'closed') {
    if (state) {
      setSideMenuState(state);
      return;
    }

    setSideMenuState(sideMenuState === 'opened' ? 'closed' : 'opened');
  }

  // close sidebar upon navigation
  useEffect(() => {
    return globalHistory.listen((params) => {
      onOpenSideMenu('closed');
    });
  }, [globalHistory, sideMenuState]);

  return (
    <div className={styles.wrapper}>
      <SideBar
        className={`${styles.sidebar}`}
        state={sideMenuState}
        onOpenSideMenu={onOpenSideMenu}
        currentPathname={props.location?.pathname as string | PAGE_NAME}
        location={props.location}
        logoURL={LogoFramed}
        linkedinPageURL={data?.contentfulCompanyInfo?.linkedinPageURL as string | null}
        facebookPageURL={data?.contentfulCompanyInfo?.facebookPageURL as string | null}
        instagramPageURL={data?.contentfulCompanyInfo?.instagramPageURL as string | null}
        twitterPageURL={data?.contentfulCompanyInfo?.twitterPageURL as string | null}
        pages={data?.allContentfulPage?.edges?.map((edge) => ({
          ...edge?.node,
          locale: edge?.node?.node_locale,
        }))}
      ></SideBar>
      <div className={`${sideMenuState === 'opened' ? styles.open : styles.close}`}>
        <NavBar
          onOpenSideMenu={onOpenSideMenu}
          currentPathname={props.location?.pathname as string | PAGE_NAME}
          location={props.location}
          logoURL={LogoFramed}
          linkedinPageURL={data?.contentfulCompanyInfo?.linkedinPageURL as string | null}
          facebookPageURL={data?.contentfulCompanyInfo?.facebookPageURL as string | null}
          instagramPageURL={data?.contentfulCompanyInfo?.instagramPageURL as string | null}
          twitterPageURL={data?.contentfulCompanyInfo?.twitterPageURL as string | null}
          pages={data?.allContentfulPage?.edges?.map((edge) => ({
            ...edge?.node,
            locale: edge?.node?.node_locale,
          }))}
        ></NavBar>
        {props.children}
      </div>
      <Footer className={styles.footer}></Footer>
    </div>
  );
};
