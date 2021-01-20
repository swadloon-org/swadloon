import { NavBar, MainWrapper, Label, Main } from '@newrade/core-react-ui';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import { useStyles } from 'react-treat';
import { LayoutAllSitePageQuery } from '../../types/graphql-types';
import * as styleRefs from './layout.treat';
import LogoSymbol from '../images/logo-symbol.svg';
import Logo from '../images/logo.svg';
import { GatsbyLink } from '@newrade/core-gatsby-ui/src';

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

  const { styles } = useStyles(styleRefs);

  return (
    <MainWrapper>
      <NavBar
        HomeLink={<GatsbyLink to={'/'} />}
        MobileSvgLogo={<LogoSymbol />}
        DesktopSvgLogo={<Logo />}
        MenuLinks={
          <>
            <Label>Services</Label>
            <Label>Technologies</Label>
            <Label>Agence</Label>
            <Label>Contact</Label>
          </>
        }
      ></NavBar>
      <Main>{props.children}</Main>
      {/* <Footer></Footer> */}
    </MainWrapper>
  );
});
