import { BoxV2, useCommonProps } from '@newrade/core-react-ui';
import { MarkdownCSS } from '@newrade/core-react-ui/lib/markdown';
import React from 'react';
import { useStyles } from 'react-treat';
import { BlockAPI } from '../api/block.api';
import { MarkdownRenderer } from '../markdown/markdown-renderer';
import * as styleRefs from './block-markdown.treat';
import { BlockProps } from './block.props';

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
  const { styles } = useStyles(styleRefs);
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });

  if (!children) {
    return null;
  }

  return (
    <BoxV2 {...commonProps}>
      {injectMarkdownStyles ? (
        <MarkdownCSS className={styles.content}>
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
    </BoxV2>
  );
};
