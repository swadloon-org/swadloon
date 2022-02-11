import React from 'react';

import { TagProps, TagSize, Variant } from '@newrade/core-design-system';

import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './tag.css';

type Props = PrimitiveProps<'div'> &
  TagProps & {
    children?: any;
  };

export const Tag: React.FC<Props> = React.memo(function Tag({
  id,
  style,
  className,
  children,
  as,
  variant = Variant.primary,
  size = TagSize.medium,
  ...props
}) {
  return (
    //
    // Rectangular container
    //
    <Primitive
      {...{
        id,
        style,
        className,
        classNames: [
          styles.base,
          styles.variants({
            variant: variant,
            size: size,
          }),
        ],
        ...props,
      }}
    >
      {/**
       * Text element
       */}
      <Primitive
        classNames={[
          styles.labelVariants({
            size: size,
          }),
        ]}
      >
        {children}
      </Primitive>
    </Primitive>
  );
});
