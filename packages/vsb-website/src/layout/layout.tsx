import { Label, Main, MainWrapper, NavBar, Link } from '@newrade/core-react-ui';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import { useStyles } from 'react-treat';
import { LayoutAllSitePageQuery } from '../../types/graphql-types';
import { Footer } from '../components/footer';
import LogoSymbol from '../images/logo-symbol.svg';
import Logo from '../images/logo.svg';
import * as styleRefs from './layout.treat';
import { GatsbyLink } from '@newrade/core-gatsby-ui/src';

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

  return (
    <MainWrapper>
      <NavBar
        variantStyle={'transparent'}
        MobileSvgLogo={<LogoSymbol />}
        DesktopSvgLogo={<Logo />}
        MenuLinks={
          <>
            <Link AsElement={<GatsbyLink to={'/vasectomie/'} />}>Tout sur la vasectomie</Link>
            <Link AsElement={<GatsbyLink to={'/examen-pour-transport-canada/'} />}>Examen pour Transport Canada</Link>
          </>
        }
      ></NavBar>
      <Main>{props.children}</Main>
      <Footer></Footer>
    </MainWrapper>
  );
});
