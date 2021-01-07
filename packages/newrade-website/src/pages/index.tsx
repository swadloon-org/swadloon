import React from 'react';

import Logo from '../images/logo.svg';

import { SrcPageTemplateProps } from '@newrade/core-gatsby-ui';
import { Button, Link, Stack, Title, Center, BoxV2, useTreatTheme, Cluster } from '@newrade/core-react-ui';
import { SrcPageTemplate } from '../templates/src-page.template';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Center>
      <BoxV2 padding={[cssTheme.sizing.sizes.desktop.x6]} style={{ height: '80vh' }}>
        <Cluster>
          <Title>Un univers de posibilitées à votre portée</Title>
        </Cluster>
      </BoxV2>
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
