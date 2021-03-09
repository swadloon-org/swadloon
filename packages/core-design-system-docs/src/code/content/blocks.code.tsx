import { BlockMarkdown } from '@newrade/core-gatsby-ui/src';
import { CodeOutline, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { PlaceholderMarkdown } from '../../utils/placeholder-markdown';

type Props = {};

export const Blocks: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <BlockMarkdown>
        <PlaceholderMarkdown />
      </BlockMarkdown>
    </CodeOutline>
  );
};
