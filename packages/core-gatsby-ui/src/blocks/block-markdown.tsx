import { BoxV2, MarkdownCSS, useCommonProps } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { BlockAPI } from '../api/block.api';
import { MarkdownRenderer } from '../markdown/markdown-renderer';
import * as styleRefs from './block-markdown.treat';
import { BlockProps, BlockType } from './block.props';

type Props = BlockProps & { block?: BlockAPI } & {
  children?: string | null | React.ReactNode;
};

export const BlockMarkdown: React.FC<Props> = ({
  id,
  style,
  className,
  children,
  block: { variant = BlockType.text } = { variant: BlockType.text },
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const commonProps = useCommonProps({ id, style, className, classNames: [styles.wrapper], ...props });

  if (!children) {
    return null;
  }

  return (
    <BoxV2 {...commonProps}>
      {typeof children !== 'string' ? (
        // already rendered markdown
        <MarkdownCSS className={styles.content}>{children}</MarkdownCSS>
      ) : (
        // markdown string coming out of mdx-loader
        <MarkdownRenderer className={styles.content}>{children}</MarkdownRenderer>
      )}
    </BoxV2>
  );
};
