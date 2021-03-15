import React from 'react';
import { useStyles } from 'react-treat';
import { getMergedClassname } from '../utilities';
import * as styleRefsButtons from './global-css-buttons-variables.treat';
import * as styleRefs from './global-css-variables.treat';

type Props = {};

/**
 * Injects global the theme's CSS variables.
 */
export const GlobalCSSVariables: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);
  const stylesButtons = useStyles(styleRefsButtons);
  const classNames = getMergedClassname([styles.wrapper, stylesButtons.wrapper]);

  return <div className={classNames}>{props.children}</div>;
};
