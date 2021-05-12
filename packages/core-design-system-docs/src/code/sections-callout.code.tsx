import { ButtonSize, Variant } from '@newrade/core-design-system';
import { BlockMarkdown, SectionBanner } from '@newrade/core-gatsby-ui/src';
import { PlaceholderMarkdown } from '@newrade/core-gatsby-ui/src/docs-components/placeholder-markdown';
import { Button, Heading, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
type Props = {};
export const SectionsCallOut: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();
  return (
    <>
      <SectionBanner
        callout={true}
        section={{ variant: Variant.primaryReversed }}
        BackgroundBlock={
          <div
            style={{
              background: 'linear-gradient(158deg, #49a3e2, hsl(265deg 73% 60%))',
              width: '100%',
              height: '100%',
            }}
          ></div>
        }
        ContentBlock={
          <BlockMarkdown>
            <Heading>A Great Story.</Heading>
            <PlaceholderMarkdown />
            <Button size={ButtonSize.large} variant={Variant.secondaryReversed}></Button>
          </BlockMarkdown>
        }
      ></SectionBanner>
    </>
  );
};
