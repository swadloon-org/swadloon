import React from 'react';

import { BlockMarkdown } from '@newrade/core-gatsby-ui/src';
import { PlaceholderMarkdown } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const Blocks: React.FC<Props> = (props) => {
  return (
    <>
      <BlockMarkdown>
        <PlaceholderMarkdown />
      </BlockMarkdown>
    </>
  );
};
