import { SrcPageTemplateProps } from '@newrade/core-gatsby-ui';
import { Center, Heading, Placeholder, Stack, Switcher, useTreatTheme, Paragraph } from '@newrade/core-react-ui';
import React from 'react';
import { SrcPageTemplate } from '../templates/src-page.template';
import { HEADING } from '../../../core-design-system/src';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const { cssTheme } = useTreatTheme();

  return (
    <Center style={{ marginTop: '120px' }}>
      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading>Layouts</Heading>

        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Heading variant={HEADING.h2}>Center</Heading>

          <Paragraph>Used to separate 2 or more blocks horizontally on desktop and vertically on mobile</Paragraph>

          <Center>
            <Placeholder>1</Placeholder>
          </Center>
        </Stack>

        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Heading variant={HEADING.h2}>Switcher</Heading>

          <Paragraph>Used to separate 2 or more blocks horizontally on desktop and vertically on mobile</Paragraph>

          <Switcher gap={['1em']}>
            <Placeholder>1</Placeholder>
            <Placeholder>2</Placeholder>
          </Switcher>

          <Switcher gap={['1em']} col={3}>
            <Placeholder>1</Placeholder>
            <Placeholder>2</Placeholder>
            <Placeholder>3</Placeholder>
          </Switcher>
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
