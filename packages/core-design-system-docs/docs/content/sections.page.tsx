import { HEADING } from '@newrade/core-design-system';
import { Code, CodeBlock, Heading, Hr, ListItem, ListItems, Paragraph, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system.template';
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
    <>
      <Heading variant={HEADING.h1}>Sections</Heading>

      <Paragraph>
        Sections are high level components to organize content in pages. They have predefined layouts, each in a
        dedicated layout component. Content inside Sections should always be contained in one of the Blocks.
      </Paragraph>

      <Heading variant={HEADING.h2}>Base Section Component</Heading>

      <Paragraph>
        The base <Code>{`<Section/>`}</Code> component handles props that all other sections use. Those are:
      </Paragraph>

      <ListItems>
        <ListItem>
          <Code>{`variant`}</Code>: controls the color scheme
        </ListItem>
        <ListItem>
          <Code>{`baseLayout`}</Code>: controls the internal layout
        </ListItem>
        <ListItem>
          <Code>{`padding`}</Code>: controls vertical padding
        </ListItem>
      </ListItems>

      <Heading variant={HEADING.h3}>Examples</Heading>

      <CodeBlock live={true} scope={scope}>
        {`
        <Section variant={Variant.primary}>
          <BlockMarkdown>
            <PlaceholderMarkdown/>
            <PlaceholderMarkdown/>
          </BlockMarkdown>
        </Section>
          `}
      </CodeBlock>

      <CodeBlock live={true} scope={scope}>
        {`
        <Section variant={Variant.secondary}>
          <BlockMarkdown>
            <PlaceholderMarkdown/>
            <PlaceholderMarkdown/>
          </BlockMarkdown>
        </Section>
          `}
      </CodeBlock>

      <CodeBlock live={true} scope={scope}>
        {`
        <Section variant={Variant.primaryReversed}>
          <BlockMarkdown>
            <PlaceholderMarkdown/>
            <PlaceholderMarkdown/>
          </BlockMarkdown>
        </Section>
          `}
      </CodeBlock>

      <Hr />

      <Heading variant={HEADING.h2}>Section Components</Heading>

      <Heading variant={HEADING.h3}>The "Switcher"</Heading>

      <Paragraph>2 columns layout that becomes 1 on mobile.</Paragraph>

      <CodeBlock live={true} scope={scope}>
        {`
        <SectionSwitcher
          LeftBlock={
            <BlockMarkdown>
              <PlaceholderMarkdown />
              <PlaceholderMarkdown />
            </BlockMarkdown>
          }
          RightBlock={
            <BlockMarkdown>
              <PlaceholderMarkdown />
              <PlaceholderMarkdown />
            </BlockMarkdown>
          }
        />
        `}
      </CodeBlock>

      <Heading variant={HEADING.h3}>The "Divider"</Heading>

      <Paragraph>2 columns layout with the right one having no padding.</Paragraph>

      <CodeBlock live={true} scope={scope}>
        {`
        <SectionDivider
          LeftBlock={
            <BlockMarkdown>
              <Heading>A Great Story.</Heading>
              <PlaceholderMarkdown />
              <PlaceholderMarkdown />
            </BlockMarkdown>
          }
          RightBlock={<div style={{ background: 'linear-gradient(158deg, #49a3e2, hsl(265deg 73% 60%))', width: \`100%\`, height: \`100%\` }}></div>}
        />
        `}
      </CodeBlock>
    </>
  );
};

const Page: React.FC<DesignSystemPageProps> = (props) => {
  return (
    <DesignSystemPageTemplate {...props} contentWidth={''}>
      <PageComponent {...props}></PageComponent>
    </DesignSystemPageTemplate>
  );
};

export default Page;
