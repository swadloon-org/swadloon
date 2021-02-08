import { HEADING } from '@newrade/core-design-system';
import {
  BoxV2,
  Center,
  Cluster,
  CodeBlock,
  Details,
  Grid,
  Heading,
  Paragraph,
  Stack,
  Summary,
  Switcher,
  useTreatTheme,
} from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { Placeholder } from '../utils/placeholder';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  const scope = {
    BoxV2,
    Center,
    Cluster,
    CodeBlock,
    Details,
    Grid,
    Heading,
    Paragraph,
    Stack,
    Summary,
    Switcher,
    Placeholder,
    cssTheme,
  };

  return (
    <Stack gap={[cssTheme.sizing.var.x6]}>
      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h2}>Layout Components</Heading>

        <Paragraph>Reusable and responsive primitive layout components.</Paragraph>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h3}>Box</Heading>

        <Paragraph>Flex container with padding.</Paragraph>

        <CodeBlock live={true} scope={scope}>
          {`
          <BoxV2 padding={[cssTheme.sizing.var.x4]} style={{ border: '2px solid red' }}>
            <Placeholder></Placeholder>
          </BoxV2>
          `}
        </CodeBlock>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h3}>Center</Heading>

        <Paragraph>Center content respecting the content margin set on each viewport.</Paragraph>

        <CodeBlock live={true} scope={scope}>
          {`
          <Center>
            <Placeholder>Content</Placeholder>
          </Center>
          `}
        </CodeBlock>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h3}>Stack</Heading>

        <Paragraph>Vertical grid container.</Paragraph>

        <CodeBlock live={true} scope={scope}>
          {`
          <Stack gap={[cssTheme.sizing.var.x3]}>
            <Placeholder></Placeholder>
            <Placeholder></Placeholder>
            <Placeholder></Placeholder>
          </Stack>
          `}
        </CodeBlock>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h3}>Switcher</Heading>

        <Paragraph>Used to separate 2 or more blocks horizontally on desktop and vertically on mobile.</Paragraph>

        <CodeBlock live={true} scope={scope}>
          {`
          <Switcher gap={[cssTheme.sizing.var.x2]} col={3}>
            <Placeholder>1</Placeholder>
            <Placeholder>2</Placeholder>
            <Placeholder>3</Placeholder>
          </Switcher>
          `}
        </CodeBlock>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h3}>Cluster</Heading>

        <Paragraph>Used to inline content horizontally without wrapping.</Paragraph>

        <CodeBlock live={true} scope={scope}>
          {`
          <Cluster>
          <Placeholder>1</Placeholder>
          <Cluster gap={[cssTheme.sizing.var.x2]}>
            <Placeholder>1</Placeholder>
            <Placeholder>2</Placeholder>
            <Placeholder>3</Placeholder>
            <Placeholder>4</Placeholder>
          </Cluster>
          </Cluster>
          `}
        </CodeBlock>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h3}>Grid</Heading>

        <Paragraph>Used to make a grid of content horizontally or vertically.</Paragraph>

        <CodeBlock live={true} scope={scope}>
          {`
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
          `}
        </CodeBlock>
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
