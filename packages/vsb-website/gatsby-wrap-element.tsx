import { GatsbyCommonPageContext } from '@newrade/core-gatsby-config';
import { PageProps, WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { Layout } from './src/layout/layout';

type Props = PageProps<{}, GatsbyCommonPageContext>;

export const WrapElement: React.FC<WrapPageElementBrowserArgs> = ({ element, props }) => {
  const pageProps = props as Props;

  return <Layout {...pageProps}>{element}</Layout>;
};
