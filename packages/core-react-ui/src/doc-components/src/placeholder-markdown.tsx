import React, { HTMLAttributes } from 'react';

import MarkdownHeadingsText from './placeholder-md-headings-text.mdx.js';
import MarkdownText from './placeholder-md-text.mdx.js';

type Props = HTMLAttributes<any> & {
  variantContent?: 'text' | 'titles' | 'text-and-titles' | 'list';
};

export const PlaceholderMarkdown: React.FC<Props> = ({
  id,
  style,
  className,
  variantContent = 'text',
  ...props
}) => {
  switch (variantContent) {
    case 'text-and-titles': {
      return <MarkdownHeadingsText />;
    }
    default:
    case 'text': {
      return <MarkdownText />;
    }
  }
};
