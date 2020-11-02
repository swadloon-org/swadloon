import React, { useState } from 'react';
import { useStyles } from 'react-treat';
import { Footer } from '../components/footer';
import { NavBar } from '../components/nav-bar';
import { SideBar } from '../components/side-bar';
import * as styleRefs from './page.treat';
import { ProjectPageProps } from './page.layout';

export const LayoutComponent: React.FC<ProjectPageProps> = (props) => {
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
