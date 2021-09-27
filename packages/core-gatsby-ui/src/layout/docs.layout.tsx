import loadable from '@loadable/component';
import { SITE_LANGUAGES } from '@newrade/core-common';
import { PARAGRAPH_SIZE } from '@newrade/core-design-system';
import { GatsbyMarkdownFilePageContext } from '@newrade/core-gatsb-config/config';
import {
  Link,
  Main,
  MainWrapper,
  useIntersectionObserver,
  useIsSSR,
  useTreatTheme,
  viewportContext,
  ViewportProvider,
} from '@newrade/core-react-ui';
import {
  CompanyInfoAPI,
  FooterLayout,
  NavigationAPI,
  SidebarLayout,
} from '@newrade/core-website-api';
import { PageProps } from 'gatsby';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { BreadcrumbsDocs } from '../breadcrumbs/breadcrumbs-docs';
import { FooterDocs } from '../footers/footer-docs';
import { GatsbyLink } from '../links/gatsby-link';
import { NavbarDocs } from '../navbar/navbar-docs';
import { SidebarDocsDesktop } from '../sidebar/sidebar-docs-desktop';
import { useSidebarState } from '../sidebar/sidebar.hooks';

/**
 * Sidebar
 */
const LazySidebarStandard = loadable(() => import('../sidebar/sidebar-standard'), {
  resolveComponent: (components: typeof import('../sidebar/sidebar-standard')) =>
    components.SidebarStandard,
});

/**
 * Custom props to control the layout
 */
type Props = {
  companyInfo?: CompanyInfoAPI;
  navigation?: NavigationAPI;
  footerNavigation?: NavigationAPI;
  navbarNavigation?: NavigationAPI;
};

/**
 * Gatsby layout props, it receives the same props as a page component
 * with our custom page context.
 *
 * Additionally, it has custom props to configure how the layout renders
 */
export type LayoutDocsProps = Partial<
  Omit<PageProps<any, GatsbyMarkdownFilePageContext>, 'children'> & { children: ReactNode }
> &
  Props;

/**
 * Gatsby layout component meant to render documentation pages
 *
 * Features:
 *  - navbar component with logo, tag, search theme switcher and links on the top right
 *  - sidebar with nested navigation links
 */
export const LayoutDocs: React.FC<LayoutDocsProps> = (props) => {
  const { cssTheme } = useTreatTheme();
  const isSSR = useIsSSR();
  const currentLang = props.pageContext?.locale || SITE_LANGUAGES.EN;

  /**
   * CompanyInfo
   */

  const companyInfo = props.companyInfo;

  /**
   * Navigation
   */

  const navigation = props.navigation;
  const footerNavigation = props.footerNavigation;
  const navbarNavigation = props.navbarNavigation;

  /**
   * Breadcrumbs
   */

  const BreadcrumbsPortal = () =>
    isSSR ? null : ReactDOM.createPortal(<BreadcrumbsDocs />, document.body);

  /**
   * Sidebar
   */

  const [sidebarOpened, setSidebarOpened] = useSidebarState({ initial: false });

  function handleClickMenuButton(event: React.MouseEvent) {
    setSidebarOpened(!sidebarOpened);
  }

  const HomeLink = <GatsbyLink to={'/'} />;
  const MenuLinks = (
    <>
      <Link variantSize={PARAGRAPH_SIZE.small} AsElement={<GatsbyLink to={'/docs/'} />}>
        Docs
      </Link>

      <Link variantSize={PARAGRAPH_SIZE.small} AsElement={<GatsbyLink to={'/design-system/'} />}>
        Design System
      </Link>

      <Link variantSize={PARAGRAPH_SIZE.small} AsElement={<GatsbyLink to={'/core-docs/'} />}>
        Core Docs
      </Link>
    </>
  );

  const tag =
    props.location?.pathname && /core-docs/gi.test(props.location?.pathname) ? 'core docs' : 'docs';

  const footerRef = useRef<HTMLDivElement | null>(null);
  const threshold = useRef([...Array(200).keys()].map((a) => a / 200));
  const entry = useIntersectionObserver(footerRef, { threshold: threshold.current });
  const isVisible = !!entry?.isIntersecting;
  const [navbarPosition, setNavbarPosition] = useState('');

  useEffect(() => {
    if (entry && entry.rootBounds) {
      const bottom =
        entry.rootBounds.height - entry.boundingClientRect.bottom + entry.boundingClientRect.height;
      setNavbarPosition(`${bottom > 0 ? bottom : 0}px`);
    }
  }, [isVisible, entry, entry?.boundingClientRect.bottom, entry?.boundingClientRect.height]);

  /**
   * Footer
   */

  const contentWidth = [
    cssTheme.layout.var.sidebarWidth,
    cssTheme.layout.var.contentWidth.desktopDocsMaxWidth,
    cssTheme.layout.var.asideWidth,
    cssTheme.layout.var.contentMargins,
    cssTheme.layout.var.contentMargins,
  ];
  const contentMaxWidth = `calc(${contentWidth.join(' + ')})`;

  return (
    <MainWrapper>
      {/* Navbars */}
      <NavbarDocs
        tagText={tag}
        HomeLink={HomeLink}
        maxWidth={contentMaxWidth}
        MenuLinks={MenuLinks}
        onClickMenuButton={handleClickMenuButton}
        menuOpened={sidebarOpened}
        enableLayoutModeButton={false}
      ></NavbarDocs>

      {isSSR ? null : (
        <LazySidebarStandard
          sidebar={{
            name: 'Docs Sidebar',
            layout: SidebarLayout.standard,
            navigation,
            companyInfo: {},
            version: props.pageContext?.siteMetadata?.siteVersion,
          }}
          sidebarOpened={sidebarOpened}
          onClickMenuButton={handleClickMenuButton}
          onClickBackdrop={handleClickMenuButton}
          activePathname={props.location?.pathname}
          HomeLink={<GatsbyLink to={'/'} />}
        ></LazySidebarStandard>
      )}

      {/* Desktop sidebar */}
      <SidebarDocsDesktop
        sidebar={{
          name: 'Docs Sidebar',
          layout: SidebarLayout.standard,
          navigation,
          companyInfo: {},
          version: props.pageContext?.siteMetadata?.siteVersion,
        }}
        style={{
          bottom: navbarPosition,
        }}
        sidebarOpened={sidebarOpened}
        onClickMenuButton={handleClickMenuButton}
        onClickBackdrop={handleClickMenuButton}
        activePathname={props.location?.pathname}
        HomeLink={<GatsbyLink to={'/'} />}
      ></SidebarDocsDesktop>

      <Main
        contentPadding={false}
        navbarPadding={true}
        desktopSidebarPadding={true}
        desktopAsidePadding={true}
        minHeight={true}
      >
        <ViewportProvider context={viewportContext}>{props.children}</ViewportProvider>
      </Main>

      <FooterDocs
        ref={footerRef}
        footer={{
          name: 'Docs Sidebar',
          layout: FooterLayout.standard,
          navigation: footerNavigation,
          companyInfo,
          version: props.pageContext?.siteMetadata?.siteVersion,
        }}
        colorMode={'reversed'}
        contentMaxWidth={contentMaxWidth}
      ></FooterDocs>
    </MainWrapper>
  );
};
