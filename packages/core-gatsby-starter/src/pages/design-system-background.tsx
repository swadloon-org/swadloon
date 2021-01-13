import { Background, BoxV2, Center, Heading, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { HEADING } from '../../../core-design-system/src';
import { Placeholder } from '../design-system-docs/utils/placeholder';
import { SrcPageTemplate, SrcPageTemplateProps } from '../templates/src-page.template';

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
