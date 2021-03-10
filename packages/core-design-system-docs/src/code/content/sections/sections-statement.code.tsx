import { Variant } from '@newrade/core-design-system/src';
import { BlockMarkdown, SectionStatement } from '@newrade/core-gatsby-ui/src';
import { CodeOutline, Heading, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
import { PlaceholderMarkdown } from '../../../utils/placeholder-markdown';

type Props = {};

export const SectionsStatement: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <SectionStatement
        section={{ variant: Variant.primary }}
        TopBlock={
          <BlockMarkdown>
            <Heading>Lorem Ipsum</Heading>
            <PlaceholderMarkdown />
          </BlockMarkdown>
        }
        RightBlock={
          <BlockMarkdown>
            <PlaceholderMarkdown />
          </BlockMarkdown>
        }
        LeftBlock={
          <BlockMarkdown>
            <PlaceholderMarkdown />
          </BlockMarkdown>
        }
      ></SectionStatement>
    </CodeOutline>
  );
};
