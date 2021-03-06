import React from 'react';

import { COLOR_MODE, Variant } from '@newrade/core-design-system';
import { BlockMarkdown, SectionBase } from '@newrade/core-gatsby-ui/src';
import { PlaceholderMarkdown } from '@newrade/core-react-ui/doc-components';

type Props = {};

export const SectionsPrimaryReversed: React.FC<Props> = (props) => {
  return (
    <>
      <SectionBase section={{ variant: Variant.primary, colorMode: COLOR_MODE.REVERSED }}>
        <BlockMarkdown>
          <PlaceholderMarkdown />
          <PlaceholderMarkdown />
        </BlockMarkdown>
      </SectionBase>
    </>
  );
};
