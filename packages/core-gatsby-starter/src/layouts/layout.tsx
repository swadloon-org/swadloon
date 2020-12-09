import { Link } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './layout.treat';

import { useAllSitePages } from './use-all-site-pages.hook';

export const Layout = React.memo((props) => {
  const pages = useAllSitePages();
  const { styles } = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div>
        {pages.docs.nodes.map((node) => (
          <Link key={node.id} to={node.path}>
            {node.path}
          </Link>
        ))}
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
});
