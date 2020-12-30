import { title } from 'case';
import { Link, PageProps } from 'gatsby';
import React, { ReactNode } from 'react';
import { useStyles } from 'react-treat';
import { Node } from '../../types/graphql-types';
import * as styleRefs from './layout.treat';

import { useAllSitePages } from './use-all-site-pages.hook';

// type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

export const Layout = React.memo((props) => {
  const pages = useAllSitePages();
  const { styles } = useStyles(styleRefs);

  function parsePathGroupFromName(path) {
    return path.match(/\/(?<folder>.+)\//);
  }

  function parsePathIntoGroup(pages) {
    return pages.reduce((previous, current) => {
      return previous;
    }, {});
  }

  function parsePathIntoName(path) {
    if (!path) {
      return 'No title for page';
    }

    return title(path.replace('/docs', '').replaceAll('/', ' '));
  }

  function renderNavigation(path) {
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
