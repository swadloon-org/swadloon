import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './layout.treat';

export type Props = {};

export const query = graphql`
  {
    allSitePage {
      nodes {
        id
        path
      }
    }
  }
`;

export const Layout: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);
  const data = useStaticQuery(query);

  return (
    <div className={styles.wrapper}>
      <nav>
        {data.allSitePage.nodes
          .map((node) => node.path)
          .map((path, index) => {
            return (
              <li key={index}>
                <Link to={path}>{path}</Link>
              </li>
            );
          })}
      </nav>

      <div>{props.children}</div>
    </div>
  );
};
