import { Stack, Center, Heading } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { SrcPageTemplateProps, SrcPageTemplate } from '../templates/src-page.template';
import * as styleRefs from '../styles/index.treat';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const styles = useStyles(styleRefs);
  return (
    <Center>
      <Stack gap={['20px']}>
        <Heading>Not found :(</Heading>
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
