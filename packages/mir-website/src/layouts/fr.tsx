import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { SideBar } from '../components/side-bar';
import * as stylesRef from './fr.treat';
import { Layout } from './index';

interface PageProps {
  data: any;
  location: Location;
}

export const LayoutFR: React.FC<PageProps> = (props) => {
  return (
    <Layout {...props}>
      <LayoutFRComponent {...props} />
    </Layout>
  );
};

const LayoutFRComponent: React.FC<PageProps> = (props) => {
  const styles = useStyles(stylesRef);
  const [sideMenuState, setSideMenuState] = useState<'openend' | 'closed'>('closed');

  function onOpenSideMenu() {
    setSideMenuState(sideMenuState === 'openend' ? 'closed' : 'openend');
  }

  return (
    <>
      <NavBar onOpenSideMenu={onOpenSideMenu}></NavBar>
      <SideBar className={`${styles.sidebar}`} state={sideMenuState} onOpenSideMenu={onOpenSideMenu}></SideBar>
      {props.children}
      <Footer></Footer>
    </>
  );
};

export default LayoutFR;
