import { Stack } from '@newrade/core-react-ui';
import React from 'react';
import { SrcPageTemplateProps } from '../../templates/src-page.template';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const arr = ['kk', 'yeah'];

  // const sym = Symbol();

  // const promise = Promise.resolve();
  // const promiseAny = Promise.any([fetch(''), fetch('')]);

  // class CustomDate {
  //   // ...
  //   static epoch = new CustomDate();
  // }

  const check = arr.includes('yeah!');
  return <Stack gap={['20px']}>Feature: Array.includes {JSON.stringify(check)}</Stack>;
};

const Page: React.FC<SrcPageTemplateProps> = (props) => {
  return <PageComponent {...props}></PageComponent>;
};

export default Page;
