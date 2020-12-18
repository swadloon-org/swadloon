import React from 'react';
import * as styleRefs from './default-css.treat';
import { useStyles } from 'react-treat';

type Props = {};

/**
 * Applies Basic CSS on raw HTML elements.
 */
export const DefaultCSS: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);

  return <div className={styles.wrapper}>{props.children}</div>;
};
