import { Variant } from '@newrade/core-design-system';
import { BlockMarkdown, SectionBase } from '@newrade/core-gatsby-ui';
import { PlaceholderMarkdown } from '@newrade/core-gatsby-ui/lib/docs-components/placeholder-markdown';
import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const SectionsBase: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x1]}>
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
