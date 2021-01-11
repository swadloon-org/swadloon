import { Main, MainWrapper, NavBar, SideBar } from '@newrade/core-react-ui';
import { PageProps, graphql } from 'gatsby';
import React, { ReactNode } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './design-system.layout.treat';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

const query = graphql`
  query DesignSystemLayoutPage {
    pages: allSitePage(filter: { path: { glob: "/design-system/{**,*}" } }) {
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
      frontmatter {
        name
        tags
      }
    }
  }
`;

export const LayoutDesignSystem = React.memo<LayoutProps>((props) => {
  const { styles } = useStyles(styleRefs);

  return (
    <MainWrapper>
      <NavBar></NavBar>

      <SideBar></SideBar>

      <Main navbarPadding={true}>{props.children}</Main>
    </MainWrapper>
  );
});
