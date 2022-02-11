import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { BlockMarkdown, SectionBase } from '@newrade/core-gatsby-ui/src';
import { Stack } from '@newrade/core-react-ui';
import { PlaceholderMarkdown } from '@newrade/core-react-ui/doc-components';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const SectionsBase: React.FC<Props> = (props) => {
  return (
    <Stack gap={[sizeVars.x1]}>
      <SectionBase section={{ variant: Variant.primary }}>
        <BlockMarkdown>
          <PlaceholderMarkdown />
          <PlaceholderMarkdown />
        </BlockMarkdown>
      </SectionBase>

      <SectionBase section={{ variant: Variant.secondary }}>
        <BlockMarkdown>
          <PlaceholderMarkdown />
          <PlaceholderMarkdown />
        </BlockMarkdown>
      </SectionBase>

      <SectionBase section={{ variant: Variant.tertiary }}>
        <BlockMarkdown>
          <PlaceholderMarkdown />
          <PlaceholderMarkdown />
        </BlockMarkdown>
      </SectionBase>
    </Stack>
  );
};
