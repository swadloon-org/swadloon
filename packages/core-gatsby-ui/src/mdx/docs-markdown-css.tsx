import { PrimitiveProps } from '@newrade/core-react-ui/src';
import { getMergedClassname } from '@newrade/core-react-ui/src/utilities';
import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './docs-markdown-css.treat';

type Props = PrimitiveProps;

/**
 * Applies CSS on md/mdx elements.
 */
export const DocsMarkdownCSS: React.FC<Props> = ({ id, style, className, ...props }) => {
  const styles = useStyles(styleRefs);
  const classNames = getMergedClassname([className, styles.wrapper]);

  return (
    <div id={id} style={style} className={classNames}>
      {props.children}
    </div>
  );
};
