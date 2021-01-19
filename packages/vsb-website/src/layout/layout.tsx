import { Label, Main, MainWrapper, NavBar } from '@newrade/core-react-ui';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import { useStyles } from 'react-treat';
import { LayoutAllSitePageQuery } from '../../types/graphql-types';
import { Footer } from '../components/footer';
import LogoSymbol from '../images/logo-symbol.svg';
import Logo from '../images/logo.svg';
import * as styleRefs from './layout.treat';

import '../services/i18n.service';
import { useTranslation } from 'react-i18next';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

const query = graphql`
  query LayoutAllSitePage {
    pages: allSitePage {
      totalCount
      nodes {
        id
        path
        context {
          siteMetadata {
            description
            languages {
              defaultLangKey
              langs
            }
            siteEnv
            siteUrl
            title
          }
          id
          name
          dirName
          locale
          layout
        }
      }
    }
  }
`;

export const Layout = React.memo<LayoutProps>((props) => {
  const pages = useStaticQuery<LayoutAllSitePageQuery>(query);
  const { t, i18n } = useTranslation();
  const { styles } = useStyles(styleRefs);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // function renderNavigation(path?: string) {
  //   if (!path) {
  //     return null;
  //   }

  //   return (
  //     <div className={styles.topMenu}>
  //       {pages.pages.nodes
  //         .filter((node) => !/404/.test(node.path))
  //         .map((node) => (/^\/$/.test(node.path) ? { ...node, context: { frontmatter: { name: 'Home' } } } : node))
  //         .map((node) => {
  //           return (
  //             <div key={node.id} className={styles.navItem}>
  //               <Link to={node.path}>
  //                 {node.context?.frontmatter?.name
  //                   ? parsePathIntoName(node.context?.frontmatter?.name)
  //                   : parsePathIntoName(node.path)}
  //               </Link>
  //             </div>
  //           );
  //         })}
  //     </div>
  //   );
  // }

  return (
    <MainWrapper>
      <NavBar
        variantStyle={'transparent'}
        MobileSvgLogo={<LogoSymbol />}
        DesktopSvgLogo={<Logo />}
        MenuLinks={
          <>
            <Label>Tout sur la vasectomie</Label>
            <Label>Examen pour Transport Canada</Label>
            <Label>La clinique</Label>
            <Label>Contact</Label>
            <Label onClick={() => changeLanguage('en')}>{t('hello')}</Label>
          </>
        }
      ></NavBar>
      <Main>{props.children}</Main>
      <Footer></Footer>
    </MainWrapper>
  );
});
