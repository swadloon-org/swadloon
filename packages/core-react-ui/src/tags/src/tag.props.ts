import { TagProps } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props.js';

export type TagCompProps = PrimitiveProps<'div'> &
  TagProps & {
    children?: any;
  };
