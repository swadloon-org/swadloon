import { Main, MainWrapper, NavBar } from '@newrade/core-react-ui';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './layout.treat';
import { LayoutPageQuery } from '../../types/graphql-types';
import MobileLogo from '../../../newrade-website/src/images/logo-symbol.svg';
import Logo from '../../../newrade-website/src/images/logo.svg';

const query = graphql`
  query LayoutPage {
    pages: allSitePage(filter: { path: { glob: "!/{docs,design-system}/{**,*}" } }) {
      totalCount
      nodes {
        ...SitePageFragment
      }
    }
  }

  fragment SitePageFragment on SitePage {
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
    }
  }
`;

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

export const Layout = React.memo<LayoutProps>((props) => {
  const pages = useStaticQuery<LayoutPageQuery>(query);

  const { styles } = useStyles(styleRefs);

  return (
    <MainWrapper>
      <NavBar DesktopSvgLogo={<Logo />} MobileSvgLogo={<MobileLogo />}></NavBar>

      <Main navbarPadding={true}>{props.children}</Main>
    </MainWrapper>
  );
});
