import { title } from 'case';
import { Link } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { Node } from '../../types/graphql-types';
import * as styleRefs from './layout.treat';

import { useAllSitePages } from './use-all-site-pages.hook';

export const Layout = React.memo((props) => {
  const pages = useAllSitePages();
  const { styles } = useStyles(styleRefs);

  function parsePathGroupFromName(path: string) {
    return path.match(/\/(?<folder>.+)\//);
  }

  function parsePathIntoGroup(pages: Node[]) {
    return pages.reduce((previous, current) => {
      return previous;
    }, {});
  }

  function parsePathIntoName(path: string) {
    return title(path.replace('/docs', '').replace('/', ' '));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.sideMenu}>
        {pages.docs.nodes.map((node) => {
          console.log(parsePathGroupFromName(node.path));

          return (
            <div key={node.id} className={styles.navItem}>
              <Link to={node.path}>{node.context?.frontmatter?.name || node.path}</Link>
            </div>
          );
        })}
      </div>

      <main className={styles.content}>{props.children}</main>
    </div>
  );
});
