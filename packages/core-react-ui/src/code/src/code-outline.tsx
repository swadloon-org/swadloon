import React from 'react';

import { useCommonProps } from '@newrade/core-react-ui-hooks';

import { Stack } from '../layout/stack.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';
import { sizeVars } from '../theme.js';

import * as styles from './code-outline.css.js';

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
