import React from 'react';

import { ButtonSize, COLOR_MODE, Variant } from '@newrade/core-design-system';
import { BlockMarkdown, SectionShowcase } from '@newrade/core-gatsby-ui/src';
import { Button, Heading, useTreatTheme } from '@newrade/core-react-ui';
import { PlaceholderMarkdown } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const SectionsShowCase: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <SectionShowcase
        section={{ variant: Variant.primary, colorMode: COLOR_MODE.REVERSED }}
        LeftBGBlock={
          <div
            style={{
              background: 'linear-gradient(130deg, #49a3e2, hsl(180deg 50% 60%))',
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          ></div>
        }
        LeftTextBlock={
          <BlockMarkdown>
            <Heading>Lorem Ipsum</Heading>
            <PlaceholderMarkdown />
            <Button size={ButtonSize.large} variant={Variant.secondary}></Button>
          </BlockMarkdown>
        }
        RightBGBlock={
          <div
            style={{
              background: 'linear-gradient(158deg, #49a3e2, hsl(265deg 73% 60%))',
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          ></div>
        }
        RightTextBlock={
          <BlockMarkdown>
            <Heading>Lorem Ipsum</Heading>
            <PlaceholderMarkdown />
            <Button size={ButtonSize.large} variant={Variant.secondary}></Button>
          </BlockMarkdown>
        }
      ></SectionShowcase>
    </>
  );
};
