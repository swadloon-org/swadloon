import React, { useState } from 'react';
import { TreatProvider, useStyles } from 'react-treat';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { SideBar } from '../components/side-bar';
import { ViewportProvider } from '../context/viewport.context';
import { light } from '../design-system/themes.treat';
import { viewportContext } from '../hooks/use-viewport.hook';
import '../styles/font-faces.styles.css';
import * as styleRefs from './index.treat';
import { CSSProperties, style } from 'treat/lib/types';
import { relative } from 'path';

export type NavigationProps = {
  location?: Location;
  logoURL?: string | null;
  linkedinPageURL?: string | null;
  facebookPageURL?: string | null;
  instagramPageURL?: string | null;
  twitterPageURL?: string | null;
  pages?: { title: string; route: string; name: string }[];
};

export const Layout: React.FC<NavigationProps> = (props) => {
  return (
    <ViewportProvider context={viewportContext}>
      <TreatProvider theme={light}>
        <LayoutComponent {...props} />
      </TreatProvider>
    </ViewportProvider>
  );
};

const LayoutComponent: React.FC<NavigationProps> = (props) => {
  const styles = useStyles(styleRefs);
  const [sideMenuState, setSideMenuState] = useState<'openend' | 'closed'>('closed');

  function onOpenSideMenu() {
    setSideMenuState(sideMenuState === 'openend' ? 'closed' : 'openend');
  }

  return (
    <>
      <SideBar
        className={`${styles.sidebar}`}
        state={sideMenuState}
        onOpenSideMenu={onOpenSideMenu}
        {...props}
      ></SideBar>
      <div className={`${sideMenuState === 'openend' ? styles.open : styles.close}`}>
        <NavBar onOpenSideMenu={onOpenSideMenu} {...props}></NavBar>
        {props.children}
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
