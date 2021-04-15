import { BlockMarkdown } from '@newrade/core-gatsby-ui/src';
import { useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { PlaceholderMarkdown } from '../../../core-gatsby-ui/src/docs-components/placeholder-markdown';

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
