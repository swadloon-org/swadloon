import { SelectHTMLAttributes } from 'react';

import { InputProps } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props';

/**
 * Additional component-only state
 */
export type InputStateProps = {};

export type InputSelectProps = PrimitiveProps<'select'> &
  SelectHTMLAttributes<any> &
  InputProps &
  InputStateProps;
