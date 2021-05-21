import { BlockMarkdown, SectionSwitcher } from '@newrade/core-gatsby-ui/src';
import { PlaceholderMarkdown } from '@newrade/core-gatsby-ui/src/docs-components/placeholder-markdown';
import { useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const SectionsSwitcher: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
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
    </>
  );
};
