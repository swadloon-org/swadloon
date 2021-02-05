import React, { LabelHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps, Label } from '..';
import { LABEL_SIZE } from '../../../core-design-system/src';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { getMergedClassname } from '../utilities/component.utilities';
import * as styleRefs from './input-error.treat';

type Props = CommonComponentProps & LabelHTMLAttributes<any> & {};

export const InputError: React.FC<Props> = ({ id, style, className, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();
  const classNames = getMergedClassname([className, styles.wrapper]);

  return (
    <Label id={id} style={style} className={classNames} variant={LABEL_SIZE.xSmall} {...props}>
      {/* TODO: should we allow this component to collapse */}
      {/* &nbsp;  */}
      {props.children || ' '}
    </Label>
  );
};
