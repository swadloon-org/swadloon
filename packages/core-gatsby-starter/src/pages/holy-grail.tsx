import { Button, Stack, Grid, Box, Center } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { ProjectPageProps } from '.';
import { Layout } from '../layouts/layout';
import { Providers } from '../layouts/providers';
import * as styleRefs from './layouts.treat';

const PageComponent: React.FC<ProjectPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);

  const Content = (props) => <div className={styles.content}>{props.children || 'Content'}</div>;

  return (
    <Grid columns={3}>
      <Stack>
        <Content>Sidemenu</Content>
      </Stack>
      <Stack>
        <Content>Topbar</Content>
        <Content>Main</Content>
      </Stack>
      <Stack>
        <Content>Rightmenu</Content>
      </Stack>
    </Grid>
  );
};

const Page: React.FC<ProjectPageProps> = (props) => {
  return (
    <Providers>
      <PageComponent {...props}></PageComponent>
    </Providers>
  );
};

export default Page;
