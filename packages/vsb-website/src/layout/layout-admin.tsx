import { VIEWPORT } from '@newrade/core-design-system';
import { GatsbyLink } from '@newrade/core-gatsby-ui/src';
import {
  Main,
  MainWrapper,
  NavBar,
  useIsSSR,
  useTreatTheme,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import { Router } from '@reach/router';
import { PageProps } from 'gatsby';
import React, { ReactNode, useEffect, useState } from 'react';
import { useStyles } from 'react-treat';
import { Admin } from '../admin/admin';
import Logo from '../images/logo.svg';
import { Footer } from './footer';
import * as styleRefs from './layout-admin.treat';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

export const LayoutAdmin = React.memo<LayoutProps>((props) => {
  const isSSR = useIsSSR();

  /**
   * Data query
   */

  /**
   * Styles & animations
   */
  const { cssTheme } = useTreatTheme();
  const styles = useStyles(styleRefs);

  /**
   * Sidebar
   */
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);

  function handleClickMenuButton(event: React.MouseEvent) {
    setSidebarOpened(!sidebarOpened);
  }

  const { viewport } = useViewportBreakpoint();

  /**
   * Navbar
   */
  useEffect(() => {
    let timeout: number;
    if (viewport === VIEWPORT.desktop) {
      timeout = window.setTimeout(() => {
        setSidebarOpened(false);
      }, 300);
    }
    return () => {
      if (timeout !== undefined) {
        window.clearTimeout(timeout);
      }
    };
  }, [viewport]);

  return (
    <MainWrapper className={styles.wrapper}>
      <NavBar
        HomeLink={<GatsbyLink to={'/'} />}
        MobileSvgLogo={<Logo />}
        DesktopSvgLogo={<Logo />}
        MenuLinks={<></>}
        onClickMenuButton={handleClickMenuButton}
        menuOpened={sidebarOpened}
      ></NavBar>

      <Main minHeight={true} navbarPadding={true}>
        <Router basepath="/admin">
          <Admin path="/" />
        </Router>
      </Main>

      <Footer id={'footer'} style={{ zIndex: cssTheme.layout.zIndex.content }}></Footer>
    </MainWrapper>
  );
});
