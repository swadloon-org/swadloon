import { BlockMarkdown } from '@newrade/core-gatsby-ui';
import { PlaceholderMarkdown } from '@newrade/core-gatsby-ui/lib/docs-components/placeholder-markdown';
import { useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const Blocks: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <BlockMarkdown>
        <PlaceholderMarkdown />
      </BlockMarkdown>
    </>
  );
};
