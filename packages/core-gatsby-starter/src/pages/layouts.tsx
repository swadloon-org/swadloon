import { Box, Center, Cluster, Grid, Stack } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { SrcPageTemplate, SrcPageTemplateProps } from '@newrade/core-gatsby-ui';
import * as styleRefs from '../styles/layouts.treat';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const { styles } = useStyles(styleRefs);

  const Content = () => <div className={styles.content}>Content</div>;

  return (
    <Stack gap={'30px'}>
      <h1>Layouts</h1>

      <h2>Grid</h2>
      <Grid columns={[1, 1, 3]} cellWidth={'1fr'} gap={'50px'}>
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
      <Center maxWidth={'500px'}>
        <Stack gap={'15px'}>
          <Content />
          <Content />
          <Content />
        </Stack>
      </Center>

      <h2>Cluster</h2>
      <Box padding={'1em'}>
        <Cluster gridAutoFlow={'column'} justifyContent={['Box', 'center', 'space-between']} minWidth={'100%'}>
          <Box>
            <h1>Hello World</h1>
          </Box>
          <Cluster gridAutoFlow={'column'} gap={'10px'} justifyItems={'center'}>
            <Box>
              <a href={'#'}>Link</a>
            </Box>
            <Box>
              <a href={'#'}>Link</a>
            </Box>
            <Box>
              <a href={'#'}>Link</a>
            </Box>
            <Box>
              <a href={'#'}>Link</a>
            </Box>
          </Cluster>
        </Cluster>
      </Box>
    </Stack>
  );
};

const Page: React.FC<SrcPageTemplateProps> = (props) => {
  return (
    <SrcPageTemplate {...props}>
      <PageComponent {...props}></PageComponent>
    </SrcPageTemplate>
  );
};

export default Page;
