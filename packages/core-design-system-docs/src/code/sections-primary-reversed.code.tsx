import { Variant } from '@newrade/core-design-system';
import { BlockMarkdown, SectionBase } from '@newrade/core-gatsby-ui';
import { PlaceholderMarkdown } from '@newrade/core-gatsby-ui/lib/docs-components/placeholder-markdown';
import { useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const SectionsPrimaryReversed: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <SectionBase section={{ variant: Variant.primaryReversed }}>
        <BlockMarkdown>
          <PlaceholderMarkdown />
          <PlaceholderMarkdown />
        </BlockMarkdown>
      </SectionBase>
    </>
  );
};
