import React from 'react';
import * as styleRefs from './global-css-variables.treat';
import { useStyles } from 'react-treat';

type Props = {};

/**
 * Injects the theme CSS variables.
 */
export const GlobalCSSVariables: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);

  return <>{props.children}</>;
};
