import 'cleave.js/dist/addons/cleave-phone.ca';
import Cleave from 'cleave.js/react';
import type { Props as CleaveProps } from 'cleave.js/react/props';
import React, { InputHTMLAttributes } from 'react';
import { PrimitiveProps } from '../primitive/primitive.props';

type Props = PrimitiveProps<'input'> &
  InputHTMLAttributes<any> & {
    cleaveProps: CleaveProps;
    state?: 'rest' | 'error';
  };

export const InputTextCleave = React.forwardRef<HTMLInputElement, Props>(function InputTextCleave(
  { style, cleaveProps, type = 'text', state = 'rest', ...props },
  ref
) {
  return (
    <Cleave
      type={cleaveProps.type ? cleaveProps.type : type}
      htmlRef={(htmlRef) => (ref = htmlRef)}
      style={style}
      {...props}
      {...cleaveProps}
    ></Cleave>
  );
});
