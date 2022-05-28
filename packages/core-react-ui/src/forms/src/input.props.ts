import type { Props as CleaveProps } from 'cleave.js/react/props';

import { InputProps } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props';

/**
 * Additional component-only state
 */
export type InputStateProps = {};

export type InputTextProps = Omit<PrimitiveProps<'input'>, 'size'> &
  InputProps &
  InputStateProps & {
    cleaveProps?: Partial<CleaveProps>;
  };

export type InputSelectProps = Omit<PrimitiveProps<'select'>, 'size'> &
  InputProps &
  InputStateProps;
