import { Variant } from '@newrade/core-design-system';
import { BlockMarkdown, SectionStatement } from '@newrade/core-gatsby-ui/src';
import { PlaceholderMarkdown } from '@newrade/core-gatsby-ui/src/docs-components/placeholder-markdown';
import { Heading, useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const SectionsStatement: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
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
    </>
  );
};
