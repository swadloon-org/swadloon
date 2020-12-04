import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import { Layout } from './src/layouts/layout';
import { Providers } from './src/layouts/providers';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  console.log(element);
  console.log(props);

  return (
    <Providers>
      <Layout {...props}>{element}</Layout>
    </Providers>
  );
};
