import { CommonComponentProps, getMergedClassname, MarkdownCSS } from '@newrade/core-react-ui';
import { MDXRenderer, MDXRendererProps } from 'gatsby-plugin-mdx';
import React from 'react';

type Props = CommonComponentProps & Partial<MDXRendererProps>;

export const MarkdownRenderer: React.FC<Props> = React.memo(({ id, style, className, ...props }) => {
  const classNames = getMergedClassname([className]);

  return (
    <MarkdownCSS id={id} style={style} className={classNames}>
      <MDXRenderer>{props.children || ''}</MDXRenderer>
    </MarkdownCSS>
  );
});
