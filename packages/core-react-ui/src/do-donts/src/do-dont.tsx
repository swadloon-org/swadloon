import React from 'react';

import { useCommonProps } from '@newrade/core-react-ui-hooks';

import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './do-dont.css';

type Props = PrimitiveProps<'div'> & {
  kind: 'do' | 'dont';
};

export const DoDont: React.FC<Props> = ({ id, style, className, kind, children, as, ...props }) => {
  const commonProps = useCommonProps<'div'>({
    id,
    style,
    className,
    classNames: [styles.base],
    ...props,
  });

  return (
    <>
      <div {...commonProps}>
        <Stack className={styles.doStyle}>{children}</Stack>
        <Stack className={styles.dontStyle}>{children}</Stack>
      </div>
    </>
  );
};
