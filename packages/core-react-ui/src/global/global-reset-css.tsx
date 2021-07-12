import React from 'react';
import './global-reset-css.treat';

type Props = {};

/**
 * Applies CSS resets on base HTML elements.
 */
export const GlobalResetCSS: React.FC<Props> = (props) => {
  return <>{props.children}</>;
};
