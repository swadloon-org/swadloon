import { BoxV2, CommonComponentProps, MarkdownCSS } from '@newrade/core-react-ui';
import React from 'react';
import { useStyles } from 'react-treat';
import { MarkdownRenderer } from '../../markdown/markdown-renderer';
import * as styleRefs from './block-markdown.treat';

type Props = CommonComponentProps & {
  children?: string | null | React.ReactNode;
};

export const BlockMarkdown: React.FC<Props> = ({ id, style, className, children, ...props }) => {
  const { styles } = useStyles(styleRefs);

  if (!children) {
    return null;
  }

  return (
    <BoxV2 id={id} style={style} className={`${styles.wrapper}`}>
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
