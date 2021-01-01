import { title } from 'case';
import { Link, PageProps, graphql, useStaticQuery } from 'gatsby';
import React, { ReactNode } from 'react';
import { useStyles } from 'react-treat';
import { Node, LayoutAllSitePageQuery } from '../../types/graphql-types';
import * as styleRefs from './layout.treat';

import { NavBar } from '@newrade/core-gatsby-ui';
import { Footer } from '../components/footer';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

const query = graphql`
  query LayoutAllSitePage {
    pages: allSitePage {
      nodes {
        ...SitePageFragment
      }
    }
  }
  fragment SitePageFragment on SitePage {
    id
    path
    context {
      id
      name
      slug
      locale
      frontmatter {
        name
        tags
      }
    }
  }
`;

export const Layout = React.memo<LayoutProps>((props) => {
  const pages = useStaticQuery<LayoutAllSitePageQuery>(query);

  const { styles } = useStyles(styleRefs);

  // function renderNavigation(path?: string) {
  //   if (!path) {
  //     return null;
  //   }

  //   return (
  //     <div className={styles.topMenu}>
  //       {pages.pages.nodes
  //         .filter((node) => !/404/.test(node.path))
  //         .map((node) => (/^\/$/.test(node.path) ? { ...node, context: { frontmatter: { name: 'Home' } } } : node))
  //         .map((node) => {
  //           return (
  //             <div key={node.id} className={styles.navItem}>
  //               <Link to={node.path}>
  //                 {node.context?.frontmatter?.name
  //                   ? parsePathIntoName(node.context?.frontmatter?.name)
  //                   : parsePathIntoName(node.path)}
  //               </Link>
  //             </div>
  //           );
  //         })}
  //     </div>
  //   );
  // }

  return (
    <div className={styles.wrapper}>
      <NavBar
        items={pages.pages.nodes.map((item) => {
          return {
            id: item.id,
            label: item.context?.name,
            to: item.path,
          };
        })}
      ></NavBar>

      {/* <header>{renderNavigation(props.location?.pathname)}</header> */}

      <main className={styles.main}>{props.children}</main>

      <Footer></Footer>
    </div>
  );
});
