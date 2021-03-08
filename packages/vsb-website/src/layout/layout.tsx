import { VIEWPORT } from '@newrade/core-design-system';
import ExpoScaleEase from '@newrade/core-gsap-ui/lib/plugins/EasePack';
import ScrollTrigger from '@newrade/core-gsap-ui/lib/plugins/ScrollTrigger';
import { gsap } from '@newrade/core-gsap-ui/src';
import { MainWrapper, NavBarRefs, useIsSSR, useTreatTheme, useViewportBreakpoint } from '@newrade/core-react-ui';
import { globalHistory } from '@reach/router';
import { PageProps } from 'gatsby';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useStyles } from 'react-treat';
import { useAnimateNavbarDesktop } from '../hook/use-animate-navbar-desktop';
import { useAnimateNavbarMobile } from '../hook/use-animate-navbar-mobile';
import { useCompanyInfo, usePagesNavigation } from '../hook/use-layout-data';
import * as styleRefs from './layout.treat';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

let pathname: string | undefined = '/'; // needed for gsap callbacks

const MobileSideBar = React.lazy(() =>
  import('@newrade/core-react-ui/lib/navigation/mobile-sidebar').then((comp) => ({ default: comp.MobileSideBar }))
);

export const Layout = React.memo<LayoutProps>((props) => {
  const isSSR = useIsSSR();

  /**
   * Data query
   */
  const navigation = usePagesNavigation();
  const { companyInfo, companyAddress } = useCompanyInfo();

  /**
   * Styles & animations
   */
  const { cssTheme } = useTreatTheme();
  const styles = useStyles(styleRefs);

  /**
   * Sidebar
   */
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);

  useEffect(() => {
    pathname = props.location?.pathname;

    return globalHistory.listen((params) => {
      setSidebarOpened(false); // close sidebar upon navigation
      setNavbarStyle(params.location?.pathname === '/' ? 'transparent' : 'white'); // set the navbar style
      pathname = params.location?.pathname;
    });
  }, [globalHistory]);

  function handleClickMenuButton(event: React.MouseEvent) {
    setSidebarOpened(!sidebarOpened);
  }

  const { viewport } = useViewportBreakpoint();

  /**
   * Navbar
   */
  const defaultNavbarState = props.location?.pathname === '/' ? 'transparent' : 'white';
  const navbarRef = useRef<NavBarRefs>();
  const [navbarStyle, setNavbarStyle] = useState<'white' | 'transparent'>(defaultNavbarState);
  const [gsapLoaded, setGsapLoaded] = useState<boolean>(false);
  useAnimateNavbarDesktop({ navbarRef, whiteStyle: navbarStyle === 'white', viewport });
  useAnimateNavbarMobile({ navbarRef, whiteStyle: navbarStyle === 'white', viewport });

  gsap.registerPlugin(ScrollTrigger, ExpoScaleEase);

  useEffect(() => {
    setTimeout(() => {
      setGsapLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!gsapLoaded) {
      return;
    }

    /**
     * @see https://greensock.com/docs/v3/Plugins/ScrollTrigger
     */
    const scrollTrigger = new ScrollTrigger({
      scrub: 1,
      delay: 1,
      toggleActions: `play none reverse none`,
      start: '40vh',
      end: '40vh',
      onEnter: () => {
        setNavbarStyle('white');
      },
      onEnterBack: function () {
        if (pathname === '/') {
          setNavbarStyle('transparent');
        }
      },
    });

    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill?.();
      }
    };
  }, [gsapLoaded]);

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

  return <MainWrapper className={styles.wrapper}>hey</MainWrapper>;
});
