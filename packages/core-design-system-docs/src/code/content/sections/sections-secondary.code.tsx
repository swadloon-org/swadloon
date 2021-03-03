import { Variant } from '@newrade/core-design-system';
import { BlockMarkdown, SectionBase } from '@newrade/core-gatsby-ui/src';
import { CodeOutline, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { PlaceholderMarkdown } from '../../../utils/placeholder-markdown';

type Props = {};

export const SectionsSecondary: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <SectionBase section={{ variant: Variant.secondary }}>
        <BlockMarkdown>
          <PlaceholderMarkdown />
          <PlaceholderMarkdown />
        </BlockMarkdown>
      </SectionBase>
    </CodeOutline>
  );
};
