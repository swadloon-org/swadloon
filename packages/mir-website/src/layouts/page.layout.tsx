import React, { useState } from 'react';
import { useStyles } from 'react-treat';

import * as styleRefs from './page.treat';
import { PAGE_NAME } from '../templates/page.template';
import { SideBar } from '../components/navigation/side-bar';
import { NavBar } from '../components/navigation/nav-bar';
import { Footer } from '../components/navigation/footer';

export type NavigationProps = {
  currentPageName: string | PAGE_NAME;
  location: Location;
  logoURL: string | null;
  linkedinPageURL: string | null;
  facebookPageURL: string | null;
  instagramPageURL: string | null;
  twitterPageURL: string | null;
  pages: { title?: string | null; route?: string | null; name?: string | PAGE_NAME | null; locale?: string | null }[];
};

export const Layout: React.FC<NavigationProps> = (props) => {
  const styles = useStyles(styleRefs);
  const [sideMenuState, setSideMenuState] = useState<'opened' | 'closed'>('closed');

  function onOpenSideMenu() {
    setSideMenuState(sideMenuState === 'opened' ? 'closed' : 'opened');
  }

  return (
    <div className={styles.wrapper}>
      <SideBar
        className={`${styles.sidebar}`}
        state={sideMenuState}
        onOpenSideMenu={onOpenSideMenu}
        {...props}
      ></SideBar>
      <div className={`${sideMenuState === 'opened' ? styles.open : styles.close}`}>
        <NavBar onOpenSideMenu={onOpenSideMenu} {...props}></NavBar>
        {props.children}
      </div>
      <Footer className={styles.footer}></Footer>
    </div>
  );
};
