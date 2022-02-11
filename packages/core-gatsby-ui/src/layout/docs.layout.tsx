import { PageProps } from 'gatsby';
import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { MDXProvider } from '@mdx-js/react';

import { SITE_LANGUAGES } from '@newrade/core-common';
import { COLOR_SCHEME, ICON, InputIcon, InputSize } from '@newrade/core-design-system';
import { GatsbyMarkdownFilePageContext } from '@newrade/core-gatsb-config/config';
import {
  Cluster,
  MainDocs,
  MainDocsWrapper,
  NavbarSeparatorItem,
  useCSSTheme,
  useIsSSR,
} from '@newrade/core-react-ui';
import { CSSThemeProviderConfig } from '@newrade/core-react-ui/src/design-system/css-theme-config';
import { useFirstRender } from '@newrade/core-react-ui/src/hooks/use-first-render.hook';
import { getLangSimpleCode } from '@newrade/core-react-ui/src/seo/meta.utilities';
import { layoutVars, sizeVars } from '@newrade/core-react-ui/theme';
import { scrollIntoView } from '@newrade/core-react-ui/utilities-browser';
import {
  BreadcrumbsAPI,
  CompanyInfoAPI,
  FooterAPI,
  NavbarAPI,
  NavigationAPI,
  SidebarAPI,
} from '@newrade/core-website-api';

import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';
import { ThemeWrapper } from '../context/theme-wrapper';
import { FooterDocs } from '../footers/footer-docs';
import { useLayoutState } from '../hooks/use-design-system-layout.hook';
import { useI18next } from '../i18next/use-i18next.hook';
import { GatsbyLink } from '../links/gatsby-link';
import { NavbarModular } from '../navbar/navbar-modular';
import { NavbarLinkItem } from '../navbar-items/navbar-link-item';
import { NavbarLogoLinkItem } from '../navbar-items/navbar-logo-item';
import { NavbarLogoTagItem } from '../navbar-items/navbar-logo-tag-item';
import { NavbarSelectItem } from '../navbar-items/navbar-select-item';
import { useSidebarState } from '../sidebar/sidebar.hooks';
import { SidebarStandardLazy } from '../sidebar/sidebar-standard.lazy';
import { SidebarDocsDesktop } from '../sidebar-docs-desktop/sidebar-docs-desktop';
import {
  getBreadcrumbsForPath,
  getPathParts,
  isPathActive,
} from '../utilities/navigation-api.utilities';

import * as styles from './docs.layout.css';

/**
 * Custom props to control the layout
 */
type Props = {
  navbar?: NavbarAPI;
  sidebar?: SidebarAPI;
  footer?: FooterAPI;
  companyInfo?: CompanyInfoAPI;
  /**
   * The application's className for its theme
   */
  themeConfig: CSSThemeProviderConfig;
  /**
   * The application's classNames for theme
   */
  themeRuntimeConfig?: CSSThemeProviderConfig;
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
export const LayoutDocs: React.FC<LayoutDocsProps> = ({ themeConfig, ...props }) => {
  const isSSR = useIsSSR();
  const isFirstRender = useFirstRender();

  /**
   *
   * Styles and theming
   *
   */

  const injectThemeWrapper = !!themeConfig;

  /**
   *
   * Translation
   *
   */

  const currentLang = props.pageContext?.locale || SITE_LANGUAGES.EN;
  const siteLangs = props.pageContext?.siteMetadata?.languages.langs;
  const { t, changeLanguage, getAlternativePageForLocale, getAlternativeLang } = useI18next();
  const alternatePageForLocale = getAlternativePageForLocale(
    currentLang,
    props.pageContext?.alternateLocales
  );

  function handleChangeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value as SITE_LANGUAGES;

    if (!value) {
      return;
    }

    changeLanguage({
      language: value,
      alternateLocales: props.pageContext?.alternateLocales,
      fallbackToHomePage: true,
    });
  }

  /**
   *
   * CompanyInfo
   *
   */

  const companyInfo = props.companyInfo;

  /**
   *
   * Navigation
   *
   */

  const navbar = props.navbar;
  const footer = props.footer;

  const sidebar: SidebarAPI = {
    ...props.sidebar,
  };

  useEffect(() => {
    if (!isSSR && isFirstRender) {
      if (window.location.hash) {
        scrollIntoView({
          id: window.location.hash,
        });
      }
    }

    return () => {};
  }, [isSSR, isFirstRender]);

  /**
   *
   * Sidebar
   *
   */

  const [sidebarOpened, setSidebarOpened] = useSidebarState({ initial: false });

  function handleClickMenuButton(event: React.MouseEvent) {
    setSidebarOpened(!sidebarOpened);
  }

  /** Update sidebar position with the footer */

  const footerRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const [navbarPosition, setNavbarPosition] = useState({ top: '', bottom: '' });

  /**
   *
   * Layout
   *
   */

  const [layoutMode, setLayoutMode] = useLayoutState('centered');

  function handleChangeLayoutMode(event: React.MouseEvent) {
    setLayoutMode(layoutMode === 'centered' ? 'full-width' : 'centered');
  }

  const contentWidth = [
    layoutVars.var.sidebarWidth,
    layoutVars.var.contentWidth.desktopDocsMaxWidth,
    layoutVars.var.asideWidth,
    layoutVars.var.contentMargins,
    layoutVars.var.contentMargins,
  ];
  const contentMaxWidth = `calc(${contentWidth.join(' + ')})`;

  const mainStyle: React.CSSProperties =
    layoutMode === 'centered'
      ? {
          // @ts-ignore
          '--max-content-width': contentMaxWidth,
        }
      : {
          // @ts-ignore
          '--layout-content-width-desktop-docs-max-width': `100%`,
        };

  /**
   *
   * MDX Components
   *
   */

  const mdxComponents = {
    ThemeWrapper: injectThemeWrapper
      ? (props: any) => <ThemeWrapper themeConfig={themeConfig} {...props} />
      : undefined,
  };

  /**
   *
   * Themes
   *
   */

  const { currentCSSTheme } = useCSSTheme();
  const currentlySelectedTheme = currentCSSTheme.selected?.name;
  const currentlySelectedThemeColorScheme = currentCSSTheme.selected?.colorScheme;

  function handleChangeTheme(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value as string;
    if (currentCSSTheme.onChangeTheme) {
      currentCSSTheme.onChangeTheme(value);
    }
  }

  /**
   *
   * Navbar
   *
   */

  const tagText = 'docs';

  const navbarItems = {
    left: (
      <>
        <NavbarLinkItem>Link</NavbarLinkItem>
      </>
    ),
    leftDesktop: (
      <Cluster gap={[sizeVars.x4]}>
        <Cluster gap={['0px']}>
          <NavbarLogoLinkItem
            tagText={'Docs'}
            AsElement={<GatsbyLink to={'/'} />}
            collapsePadding={'left'}
          />
          <NavbarLogoTagItem tagText={tagText} />
        </Cluster>

        <Cluster gap={['0px']}>
          {navbar?.navigation?.links?.map((link, linkIndex) => {
            const isLinkPathActive = isPathActive({
              path: link?.page?.slug,
              pathname: props.location?.pathname,
            });

            return (
              <NavbarLinkItem
                key={linkIndex}
                active={isLinkPathActive.match}
                AsElement={<GatsbyLink to={link?.page?.slug} />}
              >
                {link?.label}
              </NavbarLinkItem>
            );
          })}
        </Cluster>
      </Cluster>
    ),
    rightDesktop: (
      <Cluster>
        <NavbarLinkItem>Search</NavbarLinkItem>
        <NavbarSeparatorItem />

        {/**
         * Theme selector
         */}
        {themeConfig.themes ? (
          <NavbarSelectItem
            select={{
              icon: InputIcon.left,
              Icon: currentlySelectedThemeColorScheme === COLOR_SCHEME.LIGHT ? ICON.SUN : ICON.MOON,
              value: currentlySelectedTheme || '',
              onChange: handleChangeTheme,
              size: InputSize.small,
            }}
          >
            {themeConfig.themes.map((theme) => (
              <option key={theme.name} value={theme.name}>
                {theme.name}
              </option>
            ))}
          </NavbarSelectItem>
        ) : null}

        {/**
         * Language selector
         */}
        <NavbarSelectItem
          select={{
            value: getLangSimpleCode(currentLang),
            onChange: handleChangeLanguage,
            size: InputSize.small,
          }}
        >
          {siteLangs ? (
            siteLangs.map((lang) => (
              <option key={lang} value={getLangSimpleCode(lang)}>
                {getLangSimpleCode(lang)}
              </option>
            ))
          ) : (
            <option value={currentLang}>{currentLang}</option>
          )}
        </NavbarSelectItem>
      </Cluster>
    ),
  };

  /**
   *
   * Breadcrumbs
   *
   */

  const currentPathParts = getPathParts({ path: props.location?.pathname });
  const breadcrumbs: BreadcrumbsAPI = getBreadcrumbsForPath(currentPathParts, [
    sidebar.navigation as NavigationAPI,
  ]);

  return (
    <MainDocsWrapper className={styles.mainWrapper}>
      {/**
       *
       * Navbars
       *
       */}

      <NavbarModular
        navbarMode={'normal'}
        maxWidth={contentMaxWidth}
        {...navbarItems}
      ></NavbarModular>

      {/**
       *
       * Sidebar
       *
       */}

      <React.Suspense fallback={''}>
        <SidebarStandardLazy
          sidebar={sidebar}
          sidebarOpened={sidebarOpened}
          onClickMenuButton={handleClickMenuButton}
          onClickBackdrop={handleClickMenuButton}
          activePathname={props.location?.pathname}
          HomeLink={<GatsbyLink to={'/'} />}
        ></SidebarStandardLazy>
      </React.Suspense>

      <MainDocs
        id={'main-docs'}
        style={mainStyle}
        contentPadding={false}
        navbarPadding={false}
        minHeight={true}
      >
        {/**
         * Desktop sidebar
         */}
        <SidebarDocsDesktop
          sidebar={sidebar}
          style={{ gridArea: 'main-docs-sidebar' }}
          activePathname={props.location?.pathname}
        ></SidebarDocsDesktop>

        {/*
         * Breadcrumbs
         */}
        <Breadcrumbs
          breadcrumbs={breadcrumbs}
          className={styles.breadcrumbs}
          style={{ gridArea: 'main-docs-breadcrumbs' }}
        />

        {/**
         * Main markdown content
         */}
        <MDXProvider components={mdxComponents}>
          {/**
           * Template
           */}
          {props.children}
        </MDXProvider>
      </MainDocs>

      {/**
       *
       * Footer
       *
       */}

      <FooterDocs ref={footerRef} footer={footer} contentMaxWidth={contentMaxWidth}></FooterDocs>
    </MainDocsWrapper>
  );
};
