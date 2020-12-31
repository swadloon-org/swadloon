import { title } from 'case';
import { Link, PageProps, graphql, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import { useStyles } from 'react-treat';
import { Node, LayoutAllSitePageQuery } from '../../types/graphql-types';
import * as styleRefs from './layout.treat';

const query = graphql`
  query LayoutAllSitePage {
    pages: allSitePage(filter: { path: { glob: "!/{docs,design-system}/{**,*}" } }) {
      totalCount
      nodes {
        ...SitePageFragment
      }
    }
    designsystem: allSitePage(filter: { path: { glob: "/design-system/{**,*}" } }) {
      totalCount
      nodes {
        ...SitePageFragment
      }
      totalCount
    }
    docs: allSitePage(filter: { path: { glob: "/docs/{**,*}" } }) {
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
      slug
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
  const pages = useStaticQuery<LayoutAllSitePageQuery>(query);

  const { styles } = useStyles(styleRefs);

  function parsePathGroupFromName(path: string) {
    return path.match(/\/(?<folder>.+)\//);
  }

  function parsePathIntoName(path: string) {
    if (!path) {
      return 'No title for page';
    }

    return title(path.replace('/docs', '').replaceAll('/', ' '));
  }

  function renderNavigation(path?: string) {
    if (!path) {
      return null;
    }

    if (/^\/design-system/.test(path)) {
      return (
        <div className={styles.sideMenu}>
          {pages.designsystem.nodes
            .filter((node) => !/404/.test(node.path))
            .map((node) =>
              /^\/design-system\/$/.test(node.path) ? { ...node, context: { frontmatter: { name: 'Home' } } } : node
            )
            .map((node) => {
              return (
                <div key={node.id} className={styles.navItem}>
                  <Link to={node.path}>
                    {node.context?.frontmatter?.name
                      ? parsePathIntoName(node.context?.frontmatter?.name)
                      : parsePathIntoName(node.path)}
                  </Link>
                </div>
              );
            })}
        </div>
      );
    }

    if (/^\/docs/.test(path)) {
      return (
        <div className={styles.sideMenu}>
          {pages.docs.nodes
            .filter((node) => !/404/.test(node.path))
            .map((node) =>
              /^\/docs\/$/.test(node.path) ? { ...node, context: { frontmatter: { name: 'Home' } } } : node
            )
            .map((node) => {
              return (
                <div key={node.id} className={styles.navItem}>
                  <Link to={node.path}>
                    {node.context?.frontmatter?.name
                      ? parsePathIntoName(node.context?.frontmatter?.name)
                      : parsePathIntoName(node.path)}
                  </Link>
                </div>
              );
            })}
        </div>
      );
    }

    return (
      <div className={styles.sideMenu}>
        {pages.pages.nodes
          .filter((node) => !/404/.test(node.path))
          .map((node) => (/^\/$/.test(node.path) ? { ...node, context: { frontmatter: { name: 'Home' } } } : node))
          .map((node) => {
            return (
              <div key={node.id} className={styles.navItem}>
                <Link to={node.path}>
                  {node.context?.frontmatter?.name
                    ? parsePathIntoName(node.context?.frontmatter?.name)
                    : parsePathIntoName(node.path)}
                </Link>
              </div>
            );
          })}
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <header></header>

      {renderNavigation(props.location?.pathname)}

      <main className={styles.main}>{props.children}</main>

      <footer>footer</footer>
    </div>
  );
});
