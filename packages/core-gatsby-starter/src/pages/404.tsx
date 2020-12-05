import { Button, Stack } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { Layout } from '../layouts/layout';
import { Providers } from '../layouts/providers';
import { FilePageProps } from '../props/page.props';
import * as styleRefs from './index.treat';

const PageComponent: React.FC<FilePageProps> = (props) => {
  const styles = useStyles(styleRefs);
  return <Stack gap={'20px'}>Not found</Stack>;
};

const Page: React.FC<FilePageProps> = (props) => {
  return (
    <Providers>
      <Layout>
        <PageComponent {...props}></PageComponent>
      </Layout>
    </Providers>
  );
};

export default Page;
