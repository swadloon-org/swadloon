import { Center, Paragraph, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { SrcPageTemplate, SrcPageTemplateProps } from '../templates/src-page.template';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const { cssTheme } = useTreatTheme();

  return (
    <Center>
      <Stack gap={[cssTheme.sizing.var.x5]}>
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
