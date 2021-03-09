import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './global-css-variables.treat';

type Props = {};

/**
 * Injects the theme CSS variables.
 */
export const GlobalCSSVariables: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);

  return <div className={styles.wrapper}>{props.children}</div>;
};
