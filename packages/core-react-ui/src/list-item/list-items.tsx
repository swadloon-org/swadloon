import React, { HTMLAttributes } from 'react';

import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';
import { GapProp } from '../props/layout.prop';
import { getDefaultTextFromProps, getMergedClassname } from '../utilities-iso';

import * as styles from './list-items.css';

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
