import React, { HTMLAttributes } from 'react';

import { Stack } from '../layout/stack.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';
import { GapProp } from '../props/layout.prop.js';
import { getDefaultTextFromProps } from '../utilities-iso/utilities-iso.js';

import * as styles from './list-items.css.js';

type Props = PrimitiveProps<'ol' | 'ul'> &
  HTMLAttributes<HTMLUListElement | HTMLOListElement> &
  Partial<{
    gap: GapProp;
  }>;

export const ListItems: React.FC<Props> = React.memo(
  ({ id, style, as = 'ul', AsElement, children, gap, ...props }) => {
    /**
     * Hooks
     */

    /**
     * Props
     */
    const classNames = [styles.wrapper, as === 'ul' ? styles.ul : styles.ol];

    /**
     * Default children
     */
    const renderedChildren = children
      ? children
      : getDefaultTextFromProps('link', {
          variant: as,
        });

    /**
     * Render
     */
    return (
      <Stack
        as={as}
        id={id}
        style={style}
        classNames={classNames}
        gap={gap || [`0.5em`]}
        {...props}
      >
        {renderedChildren}
      </Stack>
    );
  }
);
