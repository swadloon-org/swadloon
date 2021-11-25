import { SelectHTMLAttributes } from 'react';

import { InputProps } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props';

export type InputStateProps = {
  /**
   * if the input is disabled or not
   */
  disabled?: boolean;
};

export type InputSelectProps = PrimitiveProps<'select'> &
  SelectHTMLAttributes<any> &
  InputProps &
  InputStateProps;
