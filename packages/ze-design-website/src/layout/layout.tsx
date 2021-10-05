import loadable from '@loadable/component';
import { SITE_LANGUAGES } from '@newrade/core-common';
import {
  FooterStandard,
  GatsbyLink,
  NavbarStandard,
  useI18next,
  useSidebarState,
} from '@newrade/core-gatsby-ui/src';
import { LayoutDocsProps } from '@newrade/core-gatsby-ui/src/layout/docs.layout';
import {
  Main,
  MainWrapper,
  useCommonProps,
  useIsSSR,
  useTreatTheme,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './layout.treat';

/**
 * Sidebar
 */
const LazySidebarStandard = loadable(() => import('@newrade/core-gatsby-ui/src'), {
  resolveComponent: (components: typeof import('@newrade/core-gatsby-ui/src')) =>
    components.SidebarStandard,
});

type LayoutProps = LayoutDocsProps;

export const Layout: React.FC<LayoutProps> = (props) => {
  const isSSR = useIsSSR();

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
   * Styles & animations
   */

  const { cssTheme } = useTreatTheme();
  const styles = useStyles(styleRefs);

  /**
   * Navigation
   */

  const navbar = props.navbar;
  const sidebar = props.sidebar;
  const footer = props.footer;

  /**
   * Sidebar
   */

  const [sidebarOpened, setSidebarOpened] = useSidebarState({ initial: false });

  function handleClickMenuButton(event: React.MouseEvent) {
    setSidebarOpened(!sidebarOpened);
  }

  const { viewport } = useViewportBreakpoint();

  const commonProps = useCommonProps({ classNames: [styles.wrapper] });

  return (
    <MainWrapper {...commonProps}>
      <NavbarStandard
        navbar={navbar}
        HomeLink={<GatsbyLink to={'/'} />}
        onClickMenuButton={handleClickMenuButton}
        currentLanguage={props.pageContext?.locale}
        languages={props.pageContext?.siteMetadata?.languages?.langs}
        onChangeLang={handleChangeLanguage}
      ></NavbarStandard>

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

      <Main minHeight={true}>{props.children}</Main>

      <FooterStandard footer={footer}></FooterStandard>
    </MainWrapper>
  );
};
