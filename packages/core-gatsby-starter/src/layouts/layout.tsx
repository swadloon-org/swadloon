import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './layout.treat';

export type Props = {};

export const Layout: React.FC<Props> = React.memo((props) => {
  const { styles } = useStyles(styleRefs);

  return (
    <div className={styles.wrapper}>
      <div>sidebar</div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
});
