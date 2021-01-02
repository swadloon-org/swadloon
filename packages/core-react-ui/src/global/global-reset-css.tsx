import React from 'react';
import * as styleRefs from './global-reset-css.treat';
import { useStyles } from 'react-treat';

type Props = {};

/**
 * Applies CSS resets on base HTML elements.
 */
export const GlobalResetCSS: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);

  return <>{props.children}</>;
};
