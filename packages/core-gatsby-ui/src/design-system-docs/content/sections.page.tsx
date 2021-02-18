import { HEADING } from '@newrade/core-design-system';
import { Code, CodeBlock, Heading, Hr, ListItem, ListItems, Paragraph, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { BlockMarkdown } from '../../components/content/block-markdown';
import { SectionSwitcher } from '../../components/section/section-switcher';
import { DesignSystemPageProps, DesignSystemPageTemplate } from '../../templates/design-system-page.template';
import * as styleRefs from '../home.treat';
import { liveCodeScope } from '../live-code-scope';
import { PlaceholderMarkdown } from '../utils/placeholder-markdown';

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
        dedicated components. Content inside Sections should always be contained in one of the Blocks.
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
          <Code>{`variantLayout`}</Code>: controls the internal layout
        </ListItem>
        <ListItem>
          <Code>{`variantPadding`}</Code>: controls vertical padding
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

      <SectionSwitcher
        LeftBlock={
          <BlockMarkdown>
            <PlaceholderMarkdown />
            <PlaceholderMarkdown />
          </BlockMarkdown>
        }
        RightBlock={<div style={{ backgroundColor: 'aliceblue', width: `100%`, height: `100%` }}></div>}
      />
    </>
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
