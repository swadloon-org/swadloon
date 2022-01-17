import React from 'react';

import { getMergedClassname } from '../utilities-components/component.utilities';

import './global-css-layout.css';
import './global-css-scrollbar.css';
import './global-css-sizing.css';
import './global-css-transitions.css';
import './global-css-text.css';
import './global-reset-css.css';

type Props = {};

/**
 * Injects global the theme's CSS variables.
 */
export const GlobalCSSVariables: React.FC<Props> = (props) => {
  const classNames = getMergedClassname([]);

  return <div className={classNames}>{props.children}</div>;
};
