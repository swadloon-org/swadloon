import { Center, Heading, Link } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from '../styles/index.treat';
import { SrcPageTemplate, SrcPageTemplateProps } from '../templates/src-page.template';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const styles = useStyles(styleRefs);
  return (
    <Center>
      <Heading>Core Gastby Starter</Heading>

      <Link href={'/docs/'}>Repo Docs</Link>
      <Link href={'/packages-docs/'}>Docs</Link>
      <Link href={'/design-system/'}>Design System</Link>
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
