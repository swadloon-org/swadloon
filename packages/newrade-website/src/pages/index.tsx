import React from 'react';

import Logo from '../images/logo.svg';

import {
  Button,
  Link,
  Stack,
  Title,
  Center,
  BoxV2,
  useTreatTheme,
  Cluster,
  Heading,
  Paragraph,
  Label,
} from '@newrade/core-react-ui';
import { SrcPageTemplate, SrcPageTemplateProps } from '../templates/src-page.template';
import { TITLE, HEADING, PARAGRAPH_SIZE, LABEL_SIZE } from '@newrade/core-design-system';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Center>
      <BoxV2 padding={[cssTheme.sizing.sizes.desktop.x6, 0]} style={{ marginTop: '20vh' }}>
        <Cluster>
          <Stack gap={['55px']}>
            <Title>Un univers de possibilités à votre portée</Title>
            <Title variant={TITLE.t2}>Un univers de possibilités à votre portée</Title>
            <Heading variant={HEADING.h1}>Un univers de possibilités à votre portée</Heading>
            <Heading variant={HEADING.h2}>Un univers de possibilités à votre portée</Heading>
            <Heading variant={HEADING.h3}>Un univers de possibilités à votre portée</Heading>
            <Paragraph variant={PARAGRAPH_SIZE.large}>Un univers de possibilités à votre portée</Paragraph>
            <Paragraph>Un univers de possibilitées à votre portée</Paragraph>
            <Paragraph variant={PARAGRAPH_SIZE.small}>Un univers de possibilités à votre portée</Paragraph>
            <Paragraph variant={PARAGRAPH_SIZE.xSmall}>Un univers de possibilités à votre portée</Paragraph>
            <Label variant={LABEL_SIZE.medium}>Un univers de possibilités à votre portée</Label>
            <Label variant={LABEL_SIZE.small}>Un univers de possibilités à votre portée</Label>
            <Label variant={LABEL_SIZE.xSmall}>Un univers de possibilités à votre portée</Label>
          </Stack>
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
