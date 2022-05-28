import React from 'react';

import { getMergedClassname } from '../../utilities-iso/utilities-iso';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './markdown.css';

type Props = PrimitiveProps;

/**
 * Applies CSS on md/mdx elements.
 */
export const MarkdownCSS: React.FC<Props> = ({ id, style, className, ...props }) => {
  const classNames = getMergedClassname([className, styles.wrapper]);

  return (
    <div id={id} style={style} className={classNames}>
      {props.children}
    </div>
  );
};
