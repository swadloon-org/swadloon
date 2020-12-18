import React from 'react';
import * as styleRefs from './reset.treat';
import { useStyles } from 'react-treat';

type Props = {};

/**
 * Applies CSS resets on base HTML elements.
 */
export const ResetCSS: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);

  return <>{props.children}</>;
};
