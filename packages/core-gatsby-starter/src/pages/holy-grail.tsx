import { Box, Center, Grid, Stack } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { ProjectPageProps } from '.';
import { Providers } from '../layouts/providers';
import * as styleRefs from './layouts.treat';

const PageComponent: React.FC<ProjectPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);

  const Content = (props) => (
    <div style={{ height: '100px', width: '200px' }} className={styles.content}>
      {props.children || 'Content'}
    </div>
  );

  return (
    <Stack>
      <Center maxWidth="1200px">
        <a href={'#'}>Link</a>
        <a href={'#'}>Link</a>
        <a href={'#'}>Link</a>
        <a href={'#'}>Link</a>
      </Center>

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
      </Grid>

      <Center marginHorizontal="auto">
        <Box maxWidth="500px" textAlign={['center', 'center', 'left']} padding="2em">
          <Stack gap={'1em'}>
            <h1>Hello world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi ratione quam, atque vero
              exercitationem eaque ex animi reiciendis consequatur iste tempora dolore. Temporibus perspiciatis quis, ut
              similique culpa optio.
            </p>
          </Stack>
        </Box>
      </Center>

      <Center maxWidth="1200px">
        <Grid columns={[1, 1, 2]} gap={'2em'}>
          <Box padding={'2em'}>
            <Content>Sidemenu</Content>
          </Box>
          <Box padding={'2em'}>
            <Content>Sidemenu</Content>
          </Box>
        </Grid>
      </Center>
    </Stack>
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
