import React, { DetailsHTMLAttributes } from 'react';

import { PrimitiveProps } from '../primitive/primitive.props.js';
import { getMergedClassname } from '../utilities-iso/utilities-iso.js';

import * as styles from './details.css.js';

type Props = PrimitiveProps & DetailsHTMLAttributes<any> & {};

/**
 * The HTML Details Element creates a disclosure
 * widget in which information is visible only when the widget is toggled into an "open" state.
 * @see https://devdocs.io/html/element/details
 */
export const Details: React.FC<Props> = React.memo(function Details({
  id,
  style,
  className,
  ...props
}) {
  const type: keyof React.ReactHTML = 'details';
  const classNames = getMergedClassname([className, styles.wrapper]);

  return React.createElement(type, {
    id,
    style,
    className: classNames,
    ...props,
  });
});
