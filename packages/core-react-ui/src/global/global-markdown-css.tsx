import React from 'react';
import * as styleRefs from './global-markdown-css.treat';
import { useStyles } from 'react-treat';

type Props = {};

/**
 * Applies Global CSS on md/mdx elements.
 */
export const GlobalMarkdownCSS: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);

  return <div className={styles.wrapper}>{props.children}</div>;
};
