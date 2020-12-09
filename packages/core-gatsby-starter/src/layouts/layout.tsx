import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { LayoutAllSitePageQuery } from '../../types/graphql-types';
import * as styleRefs from './layout.treat';

export type Props = {};

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

export const Layout: React.FC<Props> = React.memo((props) => {
  const data = useStaticQuery<LayoutAllSitePageQuery>(query);
  const { styles } = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      {JSON.stringify(data)}
      <div>sidebar</div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
});
