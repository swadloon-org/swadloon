import React from 'react';
import { useStyles } from 'react-treat';
import { getMergedClassname } from '../utilities';
import * as styleRefsButtons from './global-css-buttons-variables.treat';
import * as styleRefsColors from './global-css-colors-variables.treat';
import * as styleRefs from './global-css-variables.treat';
import * as styleRefsReset from './global-reset-css.treat';

type Props = {};

// eslint-disable-next-line mdx/no-unused-expressions
styleRefsReset.wrapper;

/**
 * Injects global the theme's CSS variables.
 */
export const GlobalCSSVariables: React.FC<Props> = (props) => {
  const styles = useStyles(styleRefs);
  const stylesButtons = useStyles(styleRefsButtons);
  const stylesReset = useStyles(styleRefsReset);
  const stylesColors = useStyles(styleRefsColors);
  const classNames = getMergedClassname([
    styles.wrapper,
    styles.wrapper,
    stylesButtons.wrapper,
    stylesColors.wrapper,
  ]);

  return <div className={classNames}>{props.children}</div>;
};
