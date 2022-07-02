import React from 'react';

import './global-css-layout.css';
import './global-css-scrollbar.css';
import './global-css-sizing.css';
import './global-css-transitions.css';
import './global-css-text.css';
import './global-reset-css.css';

type Props = React.PropsWithChildren<{}>;

/**
 * Injects global the theme's CSS variables.
 */
export const GlobalCSSVariables: React.FC<Props> = (props) => {
  return <div>{props.children}</div>;
};
