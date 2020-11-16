import { Button, Stack, Grid, Box, Center } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { ProjectPageProps } from '.';
import { Layout } from '../layouts/layout';
import { Providers } from '../layouts/providers';
import * as styleRefs from './index.treat';

const PageComponent: React.FC<ProjectPageProps> = (props) => {
  const styles = useStyles(styleRefs);
  return (
    <Stack gap={'20px'} padding={'20px'}>
      <Stack gap={'20px'} padding={'20px'}>
        <div>hello</div>
      </Stack>

      <Stack gap={'13px'} padding={'20px'}>
        <h1>Buttons</h1>
        <Button>Button</Button>
      </Stack>
      <h3>Grid</h3>
      <Grid columns={3} cellWidth={'1fr'} gap={'50px'}>
        <Box maxWidthPx={'300px'}>
          <h1>Hello</h1>
          <p>World!</p>
        </Box>
        <Box maxWidthPx={'300px'}>
          <h1>Hello</h1>
          <p>World!</p>
        </Box>
        <Box maxWidthPx={'300px'}>
          <h1>Hello</h1>
          <p>World!</p>
        </Box>
        <Box maxWidthPx={'300px'}>
          <h1>Hello</h1>
          <p>World!</p>
        </Box>
        <Box maxWidthPx={'300px'}>
          <h1>Hello</h1>
          <p>World!</p>
        </Box>
        <Box maxWidthPx={'300px'}>
          <h1>Hello</h1>
          <p>World!</p>
        </Box>
      </Grid>

      <h1>Center</h1>
      <Center marginHorizontal={'auto'}>
        <Box>
          <h1>Center Box</h1>
        </Box>
      </Center>

      <h1>Stack</h1>
      <Center marginHorizontal={'auto'} maxWidthPx={'500px'}>
        <Stack padding={'20px'} gap={'15px'}>
          <h2>Title</h2>
          <input placeholder="name"></input>
          <input placeholder="last Name"></input>
          <input placeholder="email" type={'email'}></input>
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
