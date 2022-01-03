import React from 'react';

import { BlockMarkdown, SectionDivider } from '@newrade/core-gatsby-ui/src';
import { Heading, useTreatTheme } from '@newrade/core-react-ui';
import { PlaceholderMarkdown } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const SectionsDivider: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <SectionDivider
        LeftBlock={
          <BlockMarkdown>
            <Heading>A Great Story.</Heading>
            <PlaceholderMarkdown />
            <PlaceholderMarkdown />
          </BlockMarkdown>
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
      ></SectionDivider>
    </>
  );
};
