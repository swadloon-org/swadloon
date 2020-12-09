import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { LayoutAllSitePageQuery } from '../../types/graphql-types';
import * as styleRefs from './layout.treat';

export const query = graphql`
  query LayoutAllSitePage {
    allSitePage {
      nodes {
        id
        path
      }
    }
  }
`;

/** @type {React.FC} */
export const Layout = React.memo((props) => {
  /** @type {LayoutAllSitePageQuery} */
  const data = useStaticQuery(query);
  const { styles } = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div>{data.allSitePage.nodes.map((node) => node.path)}</div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
});
