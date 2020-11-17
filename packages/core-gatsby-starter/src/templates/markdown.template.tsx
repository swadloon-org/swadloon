import React from 'react';
import { Layout } from '../layouts/layout';
import { Providers } from '../layouts/providers';
import { ProjectPageProps } from '../pages';
import { Grid } from '@newrade/core-react-ui';

const Page: React.FC<ProjectPageProps> = (props) => {
  return (
    <Providers>
      <Layout>
        <Grid gap="20px">{props.children}</Grid>
      </Layout>
    </Providers>
  );
};

export default Page;
