import React, { LabelHTMLAttributes } from 'react';
import { PrimitiveProps } from '../primitive/primitive.props';
import { Label } from '../text/label';


type Props = PrimitiveProps &
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
