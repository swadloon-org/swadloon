import { Variant } from '@newrade/core-design-system';
import { BlockMarkdown, SectionBase } from '@newrade/core-gatsby-ui/src';
import { PlaceholderMarkdown } from '@newrade/core-gatsby-ui/src/docs-components/placeholder-markdown';
import { useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const SectionsSecondary: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <SectionBase section={{ variant: Variant.secondary }}>
        <BlockMarkdown>
          <PlaceholderMarkdown />
          <PlaceholderMarkdown />
        </BlockMarkdown>
      </SectionBase>
    </>
  );
};
