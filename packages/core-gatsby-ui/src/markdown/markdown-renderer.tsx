import { MDXRenderer, MDXRendererProps } from 'gatsby-plugin-mdx';
import React from 'react';

import { PrimitiveProps, useCommonProps } from '@newrade/core-react-ui';

type Props = PrimitiveProps & Partial<MDXRendererProps>;

/**
 * Wrapper round gatsby-plugin-mdx's MDXRenderer
 */
export const MarkdownRenderer: React.FC<Props> = React.memo(
  ({ id, style, className, ...props }) => {
    const commonProps = useCommonProps({ id, style, className, ...props });
    return <MDXRenderer {...commonProps}>{props.children || ''}</MDXRenderer>;
  }
);
