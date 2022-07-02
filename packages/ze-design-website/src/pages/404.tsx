import React from 'react';

import { Center, Paragraph, Stack } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

import { SrcPageTemplate, SrcPageTemplateProps } from '../templates/src-page.template.js';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  return (
    <Center>
      <Stack gap={[sizeVars.x5]}>
        <Paragraph>This page could not be found</Paragraph>
      </Stack>
    </Center>
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
