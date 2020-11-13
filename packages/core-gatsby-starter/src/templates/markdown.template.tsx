import React from 'react';
import { Layout } from '../layouts/layout';
import { Providers } from '../layouts/providers';
import { ProjectPageProps } from '../pages';

const Page: React.FC<ProjectPageProps> = (props) => {
  return (
    <Providers>
      <Layout>{props.children}</Layout>
    </Providers>
  );
};

export default Page;
