import { HEADING } from '@newrade/core-design-system';
import {
  Details,
  Heading,
  keys,
  Stack,
  Summary,
  useTreatTheme,
  Paragraph,
  Center,
  Switcher,
  Cluster,
  Grid,
  BoxV2,
} from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import DesignSystemPageTemplate, { DesignSystemPageProps } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { Placeholder } from '../utils/placeholder';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  return (
    <Stack id={'Design System'} gap={[cssTheme.sizing.var.x5]}>
      <Stack gap={[cssTheme.sizing.var.x5]}>
        <Details open={true}>
          <Summary>
            <Heading variant={HEADING.h3}>Layout</Heading>
          </Summary>
          <Stack gap={['1em']}>
            <Stack gap={[cssTheme.sizing.var.x4]}>
              <Heading variant={HEADING.h4}>Center</Heading>

              <Paragraph>Used to separate 2 or more blocks horizontally on desktop and vertically on mobile</Paragraph>

              <Center>
                <Placeholder>1</Placeholder>
              </Center>
            </Stack>

            <Stack gap={[cssTheme.sizing.var.x4]}>
              <Heading variant={HEADING.h4}>Switcher</Heading>

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
              <Heading variant={HEADING.h4}>Cluster</Heading>

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
              <Heading variant={HEADING.h4}>Grid</Heading>

              <Paragraph>Used to make a grid of content horizontally or vertically</Paragraph>

              <Heading variant={HEADING.h4}>Rows</Heading>

              <Grid gap={['1em']} variantGrid={'rows'} rows={[1, 2, 3]}>
                <Placeholder>1</Placeholder>
                <Placeholder>2</Placeholder>
                <Placeholder>3</Placeholder>
                <Placeholder>4</Placeholder>
                <Placeholder>5</Placeholder>
                <Placeholder>6</Placeholder>
              </Grid>

              <Heading variant={HEADING.h4}>Columns</Heading>

              <Grid gap={['1em']} variantGrid={'col'} columns={[1, 2, 3]}>
                <Placeholder>1</Placeholder>
                <Placeholder>2</Placeholder>
                <Placeholder>3</Placeholder>
                <Placeholder>4</Placeholder>
                <Placeholder>5</Placeholder>
                <Placeholder>6</Placeholder>
              </Grid>

              <Heading variant={HEADING.h4}>Columns & Rows</Heading>
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

            <Stack gap={[cssTheme.sizing.var.x4]}>
              <Heading variant={HEADING.h4}>Box</Heading>

              <Paragraph>Used to make a container with the ability to have padding</Paragraph>

              <Grid gap={['1em']} variantGrid={'col'} columns={[1, 2, 2]}>
                <BoxV2 padding={[cssTheme.sizing.var.x4]} style={{ border: '2px solid red' }}>
                  <Placeholder>A1</Placeholder>
                </BoxV2>
                <BoxV2 padding={[cssTheme.sizing.var.x4]} style={{ border: '2px solid red' }}>
                  <Placeholder>B1</Placeholder>
                </BoxV2>
              </Grid>
            </Stack>
          </Stack>
        </Details>
      </Stack>
    </Stack>
  );
};

const Page: React.FC<DesignSystemPageProps> = (props) => {
  return (
    <DesignSystemPageTemplate {...props}>
      <PageComponent {...props}></PageComponent>
    </DesignSystemPageTemplate>
  );
};

export default Page;
