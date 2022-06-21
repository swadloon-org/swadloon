import React, { LabelHTMLAttributes } from 'react';

import { LABEL_SIZE } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props.js';
import { Label } from '../text/label.js';
import { getMergedClassname } from '../utilities-iso/utilities-iso.js';

import * as styles from './input-error.css.js';

type Props = PrimitiveProps & LabelHTMLAttributes<any> & {};

export const InputError: React.FC<Props> = ({ id, style, className, ...props }) => {
  const classNames = getMergedClassname([className, styles.wrapper]);

  return (
    <Label id={id} style={style} className={classNames} variant={LABEL_SIZE.xSmall} {...props}>
      {/* TODO: should we allow this component to collapse */}
      {/* &nbsp;  */}
      {props.children || ' '}
    </Label>
  );
};
