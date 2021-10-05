import loadable from '@loadable/component';
import { MDXProvider } from '@mdx-js/react';
import { SITE_LANGUAGES } from '@newrade/core-common';
import { GatsbyMarkdownFilePageContext } from '@newrade/core-gatsb-config/config';
import { Main, Theme, useIsSSR, useTreatTheme } from '@newrade/core-react-ui';
import { CompanyInfoAPI, FooterAPI, NavbarAPI, SidebarAPI } from '@newrade/core-website-api';
import { PageProps } from 'gatsby';
import React, { ReactNode, useRef, useState } from 'react';
import { useStyles } from 'react-treat';
import { ThemeWrapper } from '../context/theme-wrapper';
import { FooterDocs } from '../footers/footer-docs';
import { useLayoutState } from '../hooks/use-design-system-layout.hook';
import { useI18next } from '../i18next/use-i18next.hook';
import { GatsbyLink } from '../links/gatsby-link';
import { NavbarStandard } from '../navbar/navbar-standard';
import { SidebarDocsDesktop } from '../sidebar/sidebar-docs-desktop';
import { useSidebarState } from '../sidebar/sidebar.hooks';
import * as styleRefs from './docs.layout.treat';

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
  navbar?: NavbarAPI;
  sidebar?: SidebarAPI;
  footer?: FooterAPI;
  companyInfo?: CompanyInfoAPI;
  /**
   * A reference to the treatTheme that can be used to pass
   * an other theme to specific sections of the app.
   */
  treatThemeRef?: string;
  /**
   * Theme object from Treat
   */
  theme?: Theme;
  /**
   * The application's className for its theme
   */
  themeClassname?: string;
};

/**
 * Gatsby layout props to display documentation pages, it receives the same props as a page component
 * with our custom page context.
 *
 * By default, it will render a documentation layout with 3 sections:
 * - Docs (i.e. all pages under /docs/)
 * - Core Docs (i.e. all pages under /core-docs/)
 * - Design System  (i.e. all pages under /design-system/)
 *
 * If you want to render different sections, pass your own `sidebar`, `navbar`, and `companyInfo` objects
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
  const styles = useStyles(styleRefs);

  const isSSR = useIsSSR();

  /**
   * Styles and theming
   */

  const { treatThemeRef, theme, themeClassname } = props;
  const injectThemeWrapper = treatThemeRef && theme && themeClassname;

  /**
   * Translation
   */
  const currentLang = props.pageContext?.locale || SITE_LANGUAGES.EN;
  const { t, changeLanguage, getTranslatedObject, getAlternativePageForLocale } = useI18next();
  const alternatePageForLocale = getAlternativePageForLocale(
    currentLang,
    props.pageContext?.alternateLocales
  );

  function handleChangeLanguage(lang: SITE_LANGUAGES) {
    changeLanguage({
      language: lang,
      alternateLocales: props.pageContext?.alternateLocales,
      fallbackToHomePage: false,
    });
  }

  /**
   * CompanyInfo
   */

  const companyInfo = props.companyInfo;

  /**
   * Navigation
   */

  const navbar = props.navbar;
  const footer = props.footer;

  const sidebar: SidebarAPI = {
    ...props.sidebar,
  };

  /**
   * Breadcrumbs
   */

  // const BreadcrumbsPortal = () =>
  //   isSSR ? null : ReactDOM.createPortal(<BreadcrumbsDocs />, document.body);

  /**
   * Navbar
   */

  const tagText = props.location?.pathname
    ? /core-docs/gi.test(props.location?.pathname)
      ? 'core docs'
      : /design-system/gi.test(props.location?.pathname)
      ? 'design system'
      : 'docs'
    : '';

  /**
   * Sidebar
   */

  const [sidebarOpened, setSidebarOpened] = useSidebarState({ initial: false });

  function handleClickMenuButton(event: React.MouseEvent) {
    setSidebarOpened(!sidebarOpened);
  }

  /** Update sidebar position with the footer */

  const footerRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const [navbarPosition, setNavbarPosition] = useState({ top: '', bottom: '' });

  // useEventListener<'scroll'>(
  //   'scroll',
  //   (event) => {
  //     if (isSSR) {
  //       return;
  //     }
  //     const footerElement = footerRef.current;
  //     if (!footerElement) {
  //       return;
  //     }
  //     const navbarElement = navbarRef.current;
  //     if (!navbarElement) {
  //       return;
  //     }
  //     const windowHeight = window.document.documentElement.clientHeight;
  //     const { height: footerHeight, bottom: footerBottom } = footerElement.getBoundingClientRect();
  //     const { bottom: navbarBottom } = navbarElement.getBoundingClientRect();
  //     const sidebarBottomPosition = windowHeight - footerBottom + footerHeight;
  //     const sidebarTopPosition = navbarBottom;
  //     setNavbarPosition({
  //       top:
  //         sidebarBottomPosition > 0
  //           ? 'auto'
  //           : `${sidebarTopPosition > 0 ? sidebarTopPosition : 0}px`,
  //       bottom: `${sidebarBottomPosition > 0 ? sidebarBottomPosition : 0}px`,
  //     });
  //   },
  //   {
  //     passive: true,
  //   }
  // );

  /**
   * Layout
   */

  const [layoutMode, setLayoutMode] = useLayoutState('centered');

  function handleChangeLayoutMode(event: React.MouseEvent) {
    setLayoutMode(layoutMode === 'centered' ? 'full-width' : 'centered');
  }

  const contentWidth = [
    cssTheme.layout.var.sidebarWidth,
    cssTheme.layout.var.contentWidth.desktopDocsMaxWidth,
    cssTheme.layout.var.asideWidth,
    cssTheme.layout.var.contentMargins,
    cssTheme.layout.var.contentMargins,
  ];
  const contentMaxWidth = `calc(${contentWidth.join(' + ')})`;

  return (
    <div className={styles.mainWrapper}>
      {/* Navbars */}
      <NavbarStandard
        ref={navbarRef}
        navbar={navbar}
        navbarMode={'normal'}
        colorMode={'reversed'}
        HomeLink={<GatsbyLink to={'/'} />}
        maxWidth={contentMaxWidth}
        tagText={tagText}
        currentLanguage={props.pageContext?.locale}
        languages={props.pageContext?.siteMetadata?.languages?.langs}
        onClickMenuButton={handleClickMenuButton}
        onChangeLang={handleChangeLanguage}
      ></NavbarStandard>

      {/* <NavbarDocs
        tagText={tag}
        navbar={{}}
        HomeLink={HomeLink}
        maxWidth={contentMaxWidth}
        MenuLinks={MenuLinks}
        onClickMenuButton={handleClickMenuButton}
        menuOpened={sidebarOpened}
        enableLayoutModeButton={false}
      ></NavbarDocs> */}

      {isSSR ? null : (
        <LazySidebarStandard
          sidebar={sidebar}
          sidebarOpened={sidebarOpened}
          onClickMenuButton={handleClickMenuButton}
          onClickBackdrop={handleClickMenuButton}
          activePathname={props.path}
          HomeLink={<GatsbyLink to={'/'} />}
        ></LazySidebarStandard>
      )}

      <Main
        contentPadding={false}
        navbarPadding={false}
        className={styles.main}
        minHeight={true}
        // desktopSidebarPadding={layoutMode === 'centered'}
        // desktopAsidePadding={layoutMode === 'centered'}
        style={
          layoutMode === 'centered'
            ? {
                maxWidth: contentMaxWidth,
              }
            : {
                // @ts-ignore
                '--layout-content-width-desktop-docs-max-width': `100%`,
              }
        }
      >
        {/* Desktop sidebar */}
        <SidebarDocsDesktop sidebar={sidebar} activePathname={props.path}></SidebarDocsDesktop>

        <MDXProvider
          components={
            injectThemeWrapper
              ? {
                  ThemeWrapper: (props: any) => (
                    <ThemeWrapper
                      treatThemeRef={treatThemeRef}
                      theme={theme}
                      themeClassname={themeClassname}
                      {...props}
                    />
                  ),
                }
              : undefined
          }
        >
          {props.children}
        </MDXProvider>
      </Main>

      <FooterDocs
        ref={footerRef}
        footer={footer}
        colorMode={'reversed'}
        contentMaxWidth={contentMaxWidth}
      ></FooterDocs>
    </div>
  );
};
