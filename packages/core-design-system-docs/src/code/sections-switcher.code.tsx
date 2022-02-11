import React from 'react';

import { COLOR_MODE } from '@newrade/core-design-system';
import { BlockMarkdown, SectionSwitcher } from '@newrade/core-gatsby-ui/src';
import { PlaceholderMarkdown } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const SectionsSwitcher: React.FC<Props> = (props) => {
  return (
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
    ></SectionSwitcher>
  );
};

export const SectionsSwitcherReversed: React.FC<Props> = (props) => {
  return (
    <SectionSwitcher
      section={{
        colorMode: COLOR_MODE.REVERSED,
      }}
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
    ></SectionSwitcher>
  );
};
