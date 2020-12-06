import { Button, Stack } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { Layout } from '../layouts/layout';
import { Providers } from '../layouts/providers';
import { SrcPageTemplateProps } from '../templates/src-page.template';
import * as styleRefs from './index.treat';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const arr = ['kk', 'yeah'];

  const sym = Symbol();

  const promise = Promise.resolve();

  const check = arr.includes('yeah!');

  console.log(arr[Symbol.iterator]());

  const styles = useStyles(styleRefs);
  return <Stack gap={'20px'}>Feature: 'Array.includes' {JSON.stringify(check)}</Stack>;
};

const Page: React.FC<SrcPageTemplateProps> = (props) => {
  return <PageComponent {...props}></PageComponent>;
};

export default Page;
