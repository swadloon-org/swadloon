import React, { LabelHTMLAttributes } from 'react';
import { CommonComponentProps } from '../props/component-common.props';
import { Label } from '../text/label';

type Props = CommonComponentProps &
  LabelHTMLAttributes<any> & {
    htmlFor: string;
    required?: boolean;
  };

export const InputLabel: React.FC<Props> = ({ id, style, className, required, ...props }) => {
  return (
    <Label id={id} style={style} className={className} {...props}>
      {props.children} {required ? '*' : ''}
    </Label>
  );
};
