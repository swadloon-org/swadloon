import React from 'react';

import Logo from '../illustrations/logo-color.svg';

import { SrcPageTemplateProps } from '@newrade/core-gatsby-ui';
import { Button, Link, Stack, Title } from '@newrade/core-react-ui';
import { SrcPageTemplate } from '../templates/src-page.template';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  return (
    <Stack gap={'20px'}>
      <Title>Hey</Title>
      <Logo />
    </Stack>
  );
};

const Page: React.FC<SrcPageTemplateProps> = (props) => {
  return (
    <SrcPageTemplate {...props}>
      <PageComponent {...props}></PageComponent>
    </SrcPageTemplate>
  );
};

export default Page;
