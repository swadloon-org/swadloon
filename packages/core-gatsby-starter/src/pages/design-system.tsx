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
            {/* {JSON.stringify(cssTheme)} */}
          </Stack>

          <Stack gap="1em">
            <h3>Colors</h3>
            <h4>All Colors</h4>
            {cssTheme.colors?.colors &&
              Object.keys(cssTheme.colors?.colors).map((color) => {
                return (
                  <div key={color} style={{ backgroundColor: (cssTheme.colors?.colors as any)[color] }}>
                    {color}
                  </div>
                );
              })}
            <h4>Colors Intents</h4>
            {cssTheme.colors?.colorIntents &&
              Object.keys(cssTheme.colors?.colorIntents).map((color) => {
                return <div key={color}>{color}</div>;
              })}
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
