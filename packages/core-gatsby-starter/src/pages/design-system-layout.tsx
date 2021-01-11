import { SrcPageTemplateProps } from '@newrade/core-gatsby-ui';
import { Center, Switcher, Placeholder } from '@newrade/core-react-ui';
import React from 'react';
import { SrcPageTemplate } from '../templates/src-page.template';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  return (
    <Center style={{ marginTop: '120px' }}>
      <Switcher gap={['1em']}>
        <Placeholder>1</Placeholder>
        <Placeholder>2</Placeholder>
      </Switcher>
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
