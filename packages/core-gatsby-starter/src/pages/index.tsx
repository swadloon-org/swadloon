import { GatsbyPageContext } from '@newrade/core-gatsby-config';
import { Button, Stack } from '@newrade/core-react-ui';
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
    <Stack gap={'20px'}>
      <Stack gap={'20px'}>
        <div>hello</div>
      </Stack>

      <Stack gap={'13px'}>
        <h1>Buttons</h1>
        <Button>Button</Button>
      </Stack>
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
