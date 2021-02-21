import { HEADING } from '@newrade/core-design-system';
import { CodeBlock, Heading, Paragraph, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { liveCodeScope } from '../live-code-scope';

const PageComponent: React.FC<DesignSystemPageProps> = (props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme, theme } = useTreatTheme();

  if (!(cssTheme && theme)) {
    return <div className={styles.wrapper}>Please provide a theme</div>;
  }

  const scope = {
    ...liveCodeScope,
    cssTheme,
  };

  return (
    <Stack gap={[cssTheme.sizing.var.x6]}>
      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h1}>Blocks</Heading>

        <Paragraph>High-level content components to display text, markdown, images, medias etc.</Paragraph>
      </Stack>

      <Stack gap={[cssTheme.sizing.var.x4]}>
        <Heading variant={HEADING.h3}>Markdown / Text</Heading>

        <Paragraph>
          Used to render markdown, can contain inlined links, images and anything that markdown supports. For more
          examples, see the Markdown section.
        </Paragraph>

        <CodeBlock live={true} scope={scope}>
          {`
          <BlockMarkdown>
            <PlaceholderMarkdown />
          </BlockMarkdown>
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
