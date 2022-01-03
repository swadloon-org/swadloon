import React from 'react';

import { BlockMarkdown } from '@newrade/core-gatsby-ui/src';
import { useTreatTheme } from '@newrade/core-react-ui';
import { PlaceholderMarkdown } from '@newrade/core-react-ui/doc-components';

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
