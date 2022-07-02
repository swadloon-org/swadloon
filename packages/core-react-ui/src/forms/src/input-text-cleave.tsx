import React from 'react';

import Cleave from 'cleave.js/react';
import type { Props as CleaveProps } from 'cleave.js/react/props';

import 'cleave.js/dist/addons/cleave-phone.ca';

import { InputTextProps } from './input.props.js';

type Props = InputTextProps;

export const InputTextCleave = React.forwardRef<HTMLInputElement, Props>(function InputTextCleave(
  { type = 'text', cleaveProps, size, ...props },
  ref
) {
  return (
    <Cleave
      type={cleaveProps?.type ? cleaveProps.type : type}
      htmlRef={(htmlRef) => (ref = htmlRef)}
      {...props}
      {...(cleaveProps as CleaveProps)}
    ></Cleave>
  );
});
