import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './markdown-css.treat';

type Props = CommonComponentProps;

/**
 * Applies Global CSS on md/mdx elements.
 */
export const MarkdownCSS: React.FC<Props> = ({ id, style, className, ...props }) => {
  const styles = useStyles(styleRefs);
  const classNames = getMergedClassname([className, styles.wrapper]);

  return (
    <div id={id} style={style} className={classNames}>
      {props.children}
    </div>
  );
};
