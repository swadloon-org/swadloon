import { Center, Heading, Link, Stack, useTreatTheme, Paragraph } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from '../styles/index.treat';
import { SrcPageTemplate, SrcPageTemplateProps } from '../templates/src-page.template';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const styles = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();

  return (
    <Center>
      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading>Core Gastby Starter</Heading>
        <Paragraph>This is a demo Gatsby site.</Paragraph>

        <Stack gap={[cssTheme.sizing.var.x3]}>
          <Link href={'/docs/'}>Docs</Link>
          <Link href={'/core-docs/'}>Core Docs</Link>
          <Link href={'/design-system/'}>Design System</Link>
        </Stack>
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
