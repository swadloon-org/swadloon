import { SrcPageTemplateProps } from '@newrade/core-gatsby-ui';
import {
  Center,
  Heading,
  Placeholder,
  Stack,
  Switcher,
  useTreatTheme,
  Paragraph,
  Cluster,
  Grid,
} from '@newrade/core-react-ui';
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

        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Heading variant={HEADING.h2}>Cluster</Heading>

          <Paragraph>Used to inline content horizontally without wrapping</Paragraph>

          <Cluster>
            <Placeholder>1</Placeholder>
            <Cluster gap={['1em']}>
              <Placeholder>1</Placeholder>
              <Placeholder>2</Placeholder>
              <Placeholder>3</Placeholder>
              <Placeholder>4</Placeholder>
            </Cluster>
          </Cluster>
        </Stack>

        <Stack gap={[cssTheme.sizing.var.x4]}>
          <Heading variant={HEADING.h2}>Grid</Heading>

          <Paragraph>Used to make a grid of content horizontally or vertically</Paragraph>

          <Heading variant={HEADING.h3}>Rows</Heading>

          <Grid gap={['1em']} variantGrid={'rows'} rows={[1, 2, 3]}>
            <Placeholder>1</Placeholder>
            <Placeholder>2</Placeholder>
            <Placeholder>3</Placeholder>
            <Placeholder>4</Placeholder>
            <Placeholder>5</Placeholder>
            <Placeholder>6</Placeholder>
          </Grid>

          <Heading variant={HEADING.h3}>Columns</Heading>

          <Grid gap={['1em']} variantGrid={'col'} columns={[1, 2, 3]}>
            <Placeholder>1</Placeholder>
            <Placeholder>2</Placeholder>
            <Placeholder>3</Placeholder>
            <Placeholder>4</Placeholder>
            <Placeholder>5</Placeholder>
            <Placeholder>6</Placeholder>
          </Grid>

          <Heading variant={HEADING.h3}>Columns & Rows</Heading>
          <Grid gap={['1em']} variantGrid={'col'} columns={[1, 3, 3]}>
            <Grid gap={['1em']} variantGrid={'rows'} rows={[1, 2, 3]}>
              <Placeholder>1</Placeholder>
              <Placeholder>2</Placeholder>
              <Placeholder>3</Placeholder>
            </Grid>
            <Grid gap={['1em']} variantGrid={'rows'} rows={[1, 2, 3]}>
              <Placeholder>A</Placeholder>
              <Placeholder>B</Placeholder>
              <Placeholder>C</Placeholder>
            </Grid>
            <Grid gap={['1em']} variantGrid={'rows'} rows={[1, 2, 3]}>
              <Placeholder>A1</Placeholder>
              <Placeholder>B1</Placeholder>
              <Placeholder>C1</Placeholder>
            </Grid>
          </Grid>
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
