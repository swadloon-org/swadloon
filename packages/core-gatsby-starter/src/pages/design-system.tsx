import { SrcPageTemplateProps } from '@newrade/core-gatsby-ui';
import React from 'react';
import { DesignSystemComponent } from '@newrade/core-react-ui';
import { SrcPageTemplate } from '../templates/src-page.template';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  return <DesignSystemComponent />;
};

const Page: React.FC<SrcPageTemplateProps> = (props) => {
  return (
    <SrcPageTemplate {...props}>
      <PageComponent {...props}></PageComponent>
    </SrcPageTemplate>
  );
};

export default Page;
