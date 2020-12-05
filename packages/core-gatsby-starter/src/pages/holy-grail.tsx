import { Box, Center, Grid, Stack, Cluster } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { Providers } from '../layouts/providers';
import * as styleRefs from './layouts.treat';
import { Layout } from '../layouts/layout';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { FilePageProps } from '../props/page.props';

export const query = graphql`
  {
    allSitePage {
      nodes {
        id
        path
      }
    }
  }
`;

const PageComponent: React.FC<FilePageProps> = (props) => {
  const data = useStaticQuery(query);
  const { styles } = useStyles(styleRefs);

  const Content = (props: any) => (
    <div style={{ height: '100px', width: '200px' }} className={styles.content}>
      {props.children || 'Content'}
    </div>
  );

  return (
    <Stack>
      <nav>
        {data.allSitePage.nodes
          .map((node: any) => node.path)
          .map((path: any, index: any) => {
            return (
              <li key={index}>
                <Link to={path}>{path}</Link>
              </li>
            );
          })}
      </nav>
      <Grid columns={[1, 2, 3]} containerQuery={[0, 700, 1200]}>
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
        <Grid columns={[1, 1, 2]}>
          <Box>
            <img
              width="360px"
              height="240px"
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
              alt=""
            />
          </Box>
          <Box maxWidth="500px" textAlign={['center', 'center', 'left']} padding="2em">
            <Stack gap={'1em'}>
              <h1>Hello world</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi ratione quam, atque vero
                exercitationem eaque ex animi reiciendis consequatur iste tempora dolore. Temporibus perspiciatis quis,
                ut similique culpa optio.
              </p>
            </Stack>
          </Box>
        </Grid>
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

const Page: React.FC<FilePageProps> = (props) => {
  return <PageComponent {...props}></PageComponent>;
};

export default Page;
