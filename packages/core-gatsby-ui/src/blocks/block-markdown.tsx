import React from 'react';

import { useCommonProps } from '@newrade/core-react-ui';
import { MarkdownCSS } from '@newrade/core-react-ui/markdown';
import { BlockAlignment, BlockAPI } from '@newrade/core-website-api';

import { MarkdownRenderer } from '../markdown/markdown-renderer.js';

import { BlockProps } from './block.props.js';
import * as styles from './block-markdown.css.js';

type Props = BlockProps & { block?: BlockAPI } & {
  children?: string | null | React.ReactNode;
  injectMarkdownStyles?: boolean;
};

export const BlockMarkdown: React.FC<Props> = ({
  id,
  style,
  className,
  children,
  injectMarkdownStyles = true,
  inView,
  block,
  ...props
}) => {
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper, block?.alignment ? styles[block.alignment as BlockAlignment] : ''],
    ...props,
  });

  if (!children) {
    return null;
  }

  return (
    <>
      {injectMarkdownStyles ? (
        <MarkdownCSS {...commonProps}>
          {typeof children !== 'string' ? (
            // already rendered markdown
            children
          ) : (
            // markdown string coming out of mdx-loader
            <MarkdownRenderer className={styles.content}>{children}</MarkdownRenderer>
          )}
        </MarkdownCSS>
      ) : (
        <>
          {typeof children !== 'string' ? (
            // already rendered markdown
            children
          ) : (
            // markdown string coming out of mdx-loader
            <MarkdownRenderer className={styles.content}>{children}</MarkdownRenderer>
          )}
        </>
      )}
    </>
  );
};
