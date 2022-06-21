import React from 'react';

import { Primitive } from '../primitive/primitive.js';

import * as styles from './kdb.css.js';
import { KdbCompProps } from './kdb.props.js';

/**
 * Keyboard Button Component
 */
export const Kdb: React.FC<KdbCompProps> = React.memo(function Tag({
  id,
  style,
  className,
  children,
  as = 'kdb',
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
        classNames: [styles.base],
        ...props,
      }}
    >
      {/**
       * Text element
       */}
      {children}
    </Primitive>
  );
});
