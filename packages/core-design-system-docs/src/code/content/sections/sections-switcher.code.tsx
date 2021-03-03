import { BlockMarkdown, SectionSwitcher } from '@newrade/core-gatsby-ui/src';
import { CodeOutline, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { PlaceholderMarkdown } from '../../../utils/placeholder-markdown';

type Props = {};

export const SectionsSwitcher: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
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
    </CodeOutline>
  );
};
