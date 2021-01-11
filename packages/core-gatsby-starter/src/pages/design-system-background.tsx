import { SrcPageTemplateProps } from '@newrade/core-gatsby-ui';
import {
  Center,
  Heading,
  Placeholder,
  Stack,
  Switcher,
  useTreatTheme,
  Paragraph,
  Background,
  Box,
  BoxV2,
} from '@newrade/core-react-ui';
import React from 'react';
import { SrcPageTemplate } from '../templates/src-page.template';
import { HEADING } from '../../../core-design-system/src';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const { cssTheme } = useTreatTheme();

  return (
    <Center style={{ marginTop: '120px' }}>
      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Heading>Background</Heading>

        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Heading variant={HEADING.h2}>Background Effect</Heading>

          <BoxV2>
            <Background imageSrc={'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'} />
            <Placeholder></Placeholder>
          </BoxV2>

          <BoxV2>
            <Background imageSrc={'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'} />
            <Placeholder></Placeholder>
          </BoxV2>
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
