import React from 'react';

import { useCommonProps } from '@newrade/core-react-ui-hooks';

import { sizeVars } from '../default-theme/src/theme.js';
import { Stack } from '../layout/stack.js';
import { PrimitiveProps } from '../primitive/primitive.props.js';

import * as styles from './input-wrapper.css.js';

type Props = PrimitiveProps;

export const InputWrapper: React.FC<Props> = ({ id, style, className, ...props }) => {
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });

  return (
    <Stack gap={[sizeVars.x1]} {...commonProps}>
      {props.children}
    </Stack>
  );
};
