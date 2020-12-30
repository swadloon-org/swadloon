import React from 'react';
import { IoIosHeart } from 'react-icons/io';
import { SrcPageTemplateProps } from '@newrade/core-gatsby-ui';
import { SrcPageTemplate } from '../templates/src-page.template';

export const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  return (
    <div>
      <IoIosHeart />
    </div>
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
