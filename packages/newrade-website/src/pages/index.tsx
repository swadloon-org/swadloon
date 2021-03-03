import { BlockMarkdown, SectionBaseLayout, SectionDivider } from '@newrade/core-gatsby-ui/src';
import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { Variant } from '../../../core-design-system/src';
import { siteAPI } from '../site/site.api';
import { SrcPageTemplate, SrcPageTemplateProps } from '../templates/src-page.template';

const PageComponent: React.FC<SrcPageTemplateProps> = (props) => {
  const { cssTheme } = useTreatTheme();

  const sections = siteAPI?.pages?.[0]?.sections;
  const Body = siteAPI?.pages?.[0]?.sections?.[0]?.blocks?.[0]?.text?.childMdx?.body as React.ElementType;

  return (
    <Stack>
      {sections?.map((section, index) => {
        return (
          <SectionDivider
            key={index}
            section={{ variant: Variant.primaryReversed, baseLayout: SectionBaseLayout.fullWidth }}
            LeftBlock={
              <BlockMarkdown>
                <Body />
              </BlockMarkdown>
            }
            RightBlock={
              <BlockMarkdown>
                <Body />
              </BlockMarkdown>
            }
          ></SectionDivider>
        );
      })}

      <pre>{JSON.stringify(siteAPI, null, 2)}</pre>
    </Stack>
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
