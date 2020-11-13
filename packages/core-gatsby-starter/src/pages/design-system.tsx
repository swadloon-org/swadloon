import { GatsbyPageContext } from '@newrade/core-gatsby-config';
import { PageProps } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { Layout } from '../layouts/layout';
import { Providers } from '../layouts/providers';
import * as styleRefs from './index.treat';

export type ProjectPageProps = PageProps<{}, GatsbyPageContext>;

const PageComponent: React.FC<ProjectPageProps> = (props) => {
  const styles = useStyles(styleRefs);
  return (
    <div className={styles.wrapper}>
      <h1>Design System</h1>

      <h2>Foundations</h2>
      <h3>Typography</h3>
      <h3>Colors</h3>
      <h2>Components</h2>
    </div>
  );
};

const Page: React.FC<ProjectPageProps> = (props) => {
  return (
    <Providers>
      <Layout>
        <PageComponent {...props}></PageComponent>
      </Layout>
    </Providers>
  );
};

export default Page;
