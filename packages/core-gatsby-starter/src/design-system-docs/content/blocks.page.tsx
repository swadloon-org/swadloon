import { HEADING } from '@newrade/core-design-system';
import { BlockMarkdown } from '@newrade/core-gatsby-ui/src';
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
    BlockMarkdown,
    cssTheme,
  };

  return (
    <Stack gap={[cssTheme.sizing.var.x6]}>
      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h2}>Blocks</Heading>

        <Paragraph>High-level content components to display text, markdown, images, medias etc.</Paragraph>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h3}>Block Markdown</Heading>

        <Paragraph>Flex container with padding.</Paragraph>

        <BlockMarkdown>{'### markdown'}</BlockMarkdown>

        {/* <CodeBlock live={true} scope={scope}>
          {`
          <BlockMarkdown>
            {'### markdown'}
          </BlockMarkdown>
          `}
        </CodeBlock> */}
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
