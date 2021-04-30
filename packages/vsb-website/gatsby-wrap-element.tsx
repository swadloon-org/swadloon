import { GatsbyCommonPageContext } from '@newrade/core-gatsby-config';
import { PageProps, WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { Layout } from './src/layout/layout';
import { LayoutAdmin } from './src/layout/layout-admin';

type Props = PageProps<{}, GatsbyCommonPageContext>;

export const WrapElement: React.FC<WrapPageElementBrowserArgs> = ({ element, props }) => {
  const pageProps = props as Props;

  if (pageProps.path === '/admin/') {
    return <LayoutAdmin {...pageProps}>{element}</LayoutAdmin>;
  }

  return <Layout {...pageProps}>{element}</Layout>;
};
