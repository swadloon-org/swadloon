import { GatsbyPageContext } from '@newrade/core-gatsby-config';
import { Button, Stack } from '@newrade/core-react-ui';
import { PageProps } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import { Layout } from '../layouts/page.layout';
import * as styleRefs from './index.treat';

export type ProjectPageProps = PageProps<{}, GatsbyPageContext>;

export const Layouts: React.FC<ProjectPageProps> = (props) => {
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
    </Stack>
  );
};

export const LayoutPage: React.FC<ProjectPageProps> = (props) => {
  return (
    <Layout>
      <Layouts {...props}></Layouts>
    </Layout>
  );
};

export default LayoutPage;
