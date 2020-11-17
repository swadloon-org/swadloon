import { Button, Stack, Grid, Box, Center } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { ProjectPageProps } from '.';
import { Layout } from '../layouts/layout';
import { Providers } from '../layouts/providers';
import * as styleRefs from './layouts.treat';

const PageComponent: React.FC<ProjectPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);

  const Content = () => <div className={styles.content}>Content</div>;

  return (
    <Stack gap={'20px'} padding={'20px'}>
      <h1>Layouts</h1>

      <h2>Grid</h2>
      <Grid columns={3} cellWidth={'1fr'} gap={'50px'}>
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </Grid>

      <h2>Center</h2>
      <Center marginHorizontal={'auto'}>
        <Content />
      </Center>

      <h2>Stack</h2>
      <Center marginHorizontal={'auto'} maxWidthPx={'500px'}>
        <Stack padding={'20px'} gap={'15px'}>
          <Content />
          <Content />
          <Content />
        </Stack>
      </Center>
    </Stack>
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
