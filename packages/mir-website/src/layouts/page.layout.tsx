import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { SideBar } from '../components/side-bar';
import * as styleRefs from './page.treat';
import { PAGE_NAME } from '../templates/page.template';

export type NavigationProps = {
  currentPageName: string | PAGE_NAME;
  location: Location;
  logoURL: string | null;
  linkedinPageURL: string | null;
  facebookPageURL: string | null;
  instagramPageURL: string | null;
  twitterPageURL: string | null;
  pages: { title?: string; route?: string; name?: string | PAGE_NAME; locale?: string }[];
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
