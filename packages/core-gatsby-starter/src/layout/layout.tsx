import { Main, MainWrapper, NavBar } from '@newrade/core-react-ui';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './layout.treat';
import { LayoutPageQuery } from '../../types/graphql-types';

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
      frontmatter {
        name
        tags
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
      <NavBar></NavBar>

      <Main navbarPadding={true}>{props.children}</Main>
    </MainWrapper>
  );
});
