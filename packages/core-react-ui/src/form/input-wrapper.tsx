import React from 'react';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';
import { sizeVars } from '../theme';

import * as styles from './input-wrapper.css';

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
