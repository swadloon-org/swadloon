import React from 'react';
import * as styleRefs from './css-variables.treat';
import { useStyles } from 'react-treat';

type Props = {};

/**
 * Injects the theme CSS variables.
 */
export const CSSVariables: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);

  return <div className={''}>{props.children}</div>;
};
