import { HEADING, Variant } from '@newrade/core-design-system';
import { BlockMarkdown, SectionBanner, SectionDivider } from '@newrade/core-gatsby-ui/src';
import { Heading, Paragraph, Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import SectionOpenSource from '../sections/section-open-source.md';
import { SrcPageTemplate, SrcPageTemplateProps } from '../templates/src-page.template';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const { cssTheme } = useTreatTheme();

  return (
    <>
      <SectionBanner
        section={{ variant: Variant.primaryReversed }}
        ContentBlock={
          <Stack
            gap={[cssTheme.sizing.var.x4]}
            style={{ justifyItems: 'center', textAlign: 'center' }}
          >
            <Heading>Ze Design System</Heading>
            <Paragraph>Simple design system and components for ambitious projects.</Paragraph>
          </Stack>
        }
        BackgroundBlock={
          <div
            style={{
              background: 'linear-gradient(158deg, #49a3e2, hsl(265deg 73% 60%))',
              width: '100%',
              height: '100%',
            }}
          ></div>
        }
      />

      <SectionDivider
        LeftBlock={
          <Stack gap={[cssTheme.sizing.var.x4]}>
            <Heading variant={HEADING.h1}>A complete design system</Heading>
            <Paragraph>
              A default theme with useful components to build websites and apps.
            </Paragraph>
          </Stack>
        }
        RightBlock={
          <div
            style={{
              background: 'linear-gradient(158deg, #49a3e2, hsl(265deg 73% 60%))',
              width: '100%',
              height: '100%',
            }}
          ></div>
        }
      />

      <SectionDivider
        LeftBlock={
          <Stack gap={[cssTheme.sizing.var.x4]}>
            <Heading variant={HEADING.h2}>Markdown based documentation generator</Heading>
            <Paragraph>
              A default theme with useful components to build websites and apps.
            </Paragraph>
          </Stack>
        }
        RightBlock={
          <div
            style={{
              background: 'linear-gradient(158deg, #49a3e2, hsl(265deg 73% 60%))',
              width: '100%',
              height: '100%',
            }}
          ></div>
        }
      />

      <SectionBanner
        callout={true}
        ContentBlock={
          <BlockMarkdown style={{ alignItems: 'center', textAlign: 'center' }}>
            <SectionOpenSource />
          </BlockMarkdown>
        }
        BackgroundBlock={
          <div
            style={{
              background: cssTheme.colors.colorIntents.background1,
              width: '100%',
              height: '100%',
            }}
          ></div>
        }
      />
    </>
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
