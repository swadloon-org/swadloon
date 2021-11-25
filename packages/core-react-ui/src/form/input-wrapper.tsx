import React from 'react';
import { useStyles } from 'react-treat';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Stack } from '../layout/stack';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styleRefs from './input-wrapper.treat';

type Props = PrimitiveProps;

export const InputWrapper: React.FC<Props> = ({ id, style, className, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper],
    ...props,
  });

  return (
    <Stack gap={[cssTheme.sizing.var.x1]} {...commonProps}>
      {props.children}
    </Stack>
  );
};
