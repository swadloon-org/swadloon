import React from 'react';

import { useCommonProps } from '@newrade/core-react-ui-hooks';

import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';
import { sizeVars } from '../theme';

import * as styles from './code-outline.css';

type Props = PrimitiveProps;

export const CodeOutline: React.FC<Props> = ({ id, style, className, ...props }) => {
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.preview],
    ...props,
  });

  return (
    <Stack gap={[sizeVars.x3]} {...commonProps}>
      {props.children}
    </Stack>
  );
};
