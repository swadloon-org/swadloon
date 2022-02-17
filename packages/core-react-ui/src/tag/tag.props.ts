import { TagProps } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props';

export type TagCompProps = PrimitiveProps<'div'> &
  TagProps & {
    children?: any;
  };
