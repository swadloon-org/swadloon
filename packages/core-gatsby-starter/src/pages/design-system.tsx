import { GatsbyPageContext } from '@newrade/core-gatsby-config';
import { PageProps } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { Layout } from '../layouts/layout';
import { Providers } from '../layouts/providers';
import * as styleRefs from './index.treat';
import { useTreatTheme } from '../hooks/treat-theme';
import { Stack } from '@newrade/core-react-ui';

export type ProjectPageProps = PageProps<{}, GatsbyPageContext>;

const PageComponent: React.FC<ProjectPageProps> = (props) => {
  const styles = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();
  return (
    <div className={styles.wrapper}>
      <Stack gap="2em">
        <h1>Design System - {cssTheme.name}</h1>

        <Stack gap="1.5em">
          <h2>Foundations</h2>

          <Stack gap="1em">
            <h3>Typography</h3>
            {JSON.stringify(cssTheme.typography.fonts)}
          </Stack>

          <Stack gap="1em">
            <h3>Colors</h3>
          </Stack>
        </Stack>

        <Stack gap="1.5em">
          <h2>Components</h2>
        </Stack>
      </Stack>
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
