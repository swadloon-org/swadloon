import React from 'react';

import {
  COLOR_MODE,
  COLOR_SCHEME,
  HEADING,
  LOGO,
  TITLE,
  Variant,
} from '@newrade/core-design-system';
import { BlockMarkdown, SectionBanner, SectionDivider } from '@newrade/core-gatsby-ui/src';
import { Heading, Logo, Paragraph, Stack } from '@newrade/core-react-ui';
import { colorVars, sizeVars } from '@newrade/core-react-ui/theme';

import SectionOpenSource from '../sections/section-open-source.md.js';
import { SrcPageTemplate, SrcPageTemplateProps } from '../templates/src-page.template.js';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  return (
    <>
      <SectionBanner
        section={{ variant: Variant.primary, colorScheme: COLOR_SCHEME.DARK }}
        ContentBlock={
          <Stack gap={[sizeVars.x4]} style={{ justifyItems: 'center', textAlign: 'center' }}>
            <Logo name={LOGO.STANDARD} />
            <Heading variant={TITLE.t1}>Open source design system and UI library</Heading>
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
          <Stack gap={[sizeVars.x4]}>
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
          <Stack gap={[sizeVars.x4]}>
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
              background: colorVars.colorIntents.background1,
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
