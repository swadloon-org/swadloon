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
import { DesignSystemPageTemplate, DesignSystemPageProps } from '../../templates/design-system-page.template';
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
        <Stack id={'typography'} gap={[cssTheme.sizing.var.x5]}>
          <Stack gap={[cssTheme.sizing.var.x4]}>
            <Heading variant={HEADING.h2}>Layout</Heading>

            <Paragraph>Grid, center, box, stacks, cluster ...</Paragraph>
          </Stack>

          <Details id={'Center'} open={true}>
            <Summary>
              <Heading variant={HEADING.h3}>Center</Heading>
            </Summary>

            <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
              <Stack gap={[cssTheme.sizing.var.x2]} style={{ width: '100%' }}>
                <Paragraph>
                  Used to separate 2 or more blocks horizontally on desktop and vertically on mobile
                </Paragraph>

                <Center>
                  <Placeholder>1</Placeholder>
                </Center>
              </Stack>
            </BoxV2>
          </Details>

          <Details id={'Switcher'} open={true}>
            <Summary>
              <Heading variant={HEADING.h3}>Switcher</Heading>
            </Summary>

            <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
              <Stack gap={[cssTheme.sizing.var.x2]} style={{ width: '100%' }}>
                <Paragraph>
                  Used to separate 2 or more blocks horizontally on desktop and vertically on mobile
                </Paragraph>

                <Stack gap={[cssTheme.sizing.var.x2]}>
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
            </BoxV2>

            <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
              <Stack gap={[cssTheme.sizing.var.x2]} style={{ width: '100%' }}>
                <Paragraph>Can be used with Stack</Paragraph>

                <Stack gap={[cssTheme.sizing.var.x2]}>
                  <Switcher gap={['1em']}>
                    <Stack>
                      <Placeholder>1</Placeholder>
                      <Placeholder>2</Placeholder>
                    </Stack>
                  </Switcher>

                  <Switcher gap={['1em']} col={3}>
                    <Placeholder>1</Placeholder>
                    <Placeholder>2</Placeholder>
                    <Placeholder>3</Placeholder>
                  </Switcher>
                </Stack>
              </Stack>
            </BoxV2>
          </Details>

          <Details id={'Cluster'} open={true}>
            <Summary>
              <Heading variant={HEADING.h3}>Cluster</Heading>
            </Summary>

            <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
              <Stack gap={[cssTheme.sizing.var.x2]} style={{ width: '100%' }}>
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
            </BoxV2>
          </Details>

          <Details id={'Grid'} open={true}>
            <Summary>
              <Heading variant={HEADING.h3}>Grid</Heading>
            </Summary>

            <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
              <Stack gap={[cssTheme.sizing.var.x2]} style={{ width: '100%' }}>
                <Paragraph>Used to make a grid of content horizontally or vertically</Paragraph>

                <Heading variant={HEADING.h4}>Rows</Heading>

                <Grid gap={['1em']} variantGrid={'rows'} rows={[1, 2, 3]}>
                  <Placeholder>1</Placeholder>
                  <Placeholder>2</Placeholder>
                  <Placeholder>3</Placeholder>
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
            </BoxV2>
          </Details>

          <Details id={'Box'} open={true}>
            <Summary>
              <Heading variant={HEADING.h3}>Box</Heading>
            </Summary>

            <BoxV2 padding={[cssTheme.sizing.var.x3, '0']}>
              <Stack gap={[cssTheme.sizing.var.x2]} style={{ width: '100%' }}>
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
            </BoxV2>
          </Details>
        </Stack>
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
