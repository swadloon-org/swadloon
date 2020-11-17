import { Button, Stack, Grid, Box, Center, Switcher } from '@newrade/core-react-ui';
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
    <div className="wrapper">
      <Grid columns={[1, 3, 3]}>
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
        <Grid columns={[1, 2, 3]}>
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
      </Grid>

      <Stack>
        <Center marginHorizontal="auto">
          <Box maxWidthPx="500px">
            <h1>Hello world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi ratione quam, atque vero
              exercitationem eaque ex animi reiciendis consequatur iste tempora dolore. Temporibus perspiciatis quis, ut
              similique culpa optio.
            </p>
          </Box>
        </Center>
      </Stack>

      <Stack>
        <Center>
          <Switcher>
            <Box maxWidthPx="100%">
              <h1>Hello world</h1>
            </Box>
            <Box maxWidthPx="100%">
              <h1>Hello world</h1>
            </Box>
            <Box maxWidthPx="100%">
              <h1>Hello world</h1>
            </Box>
            <Box maxWidthPx="100%">
              <h1>Hello world</h1>
            </Box>
            <Box maxWidthPx="100%">
              <h1>Hello world</h1>
            </Box>
            <Box maxWidthPx="100%">
              <h1>Hello world</h1>
            </Box>
            <Box maxWidthPx="100%">
              <h1>Hello world</h1>
            </Box>
            <Box maxWidthPx="100%">
              <h1>Hello world</h1>
            </Box>
            <Box maxWidthPx="100%">
              <h1>Hello world</h1>
            </Box>
            <Box maxWidthPx="100%">
              <h1>Hello world</h1>
            </Box>
          </Switcher>
        </Center>
      </Stack>
    </div>
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
