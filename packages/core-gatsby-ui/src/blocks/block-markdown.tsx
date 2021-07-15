import { useCommonProps } from '@newrade/core-react-ui/src';
import { MarkdownCSS } from '@newrade/core-react-ui/src/markdown';
import { BlockAPI } from '@newrade/core-website-api';
import React from 'react';
import { useStyles } from 'react-treat';
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
