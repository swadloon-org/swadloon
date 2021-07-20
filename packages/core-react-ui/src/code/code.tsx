import React from 'react';
import { useStyles } from 'react-treat';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { PrimitiveProps } from '../primitive/primitive.props';
import * as styleRefs from './code.treat';

type Props = PrimitiveProps<'code'>;

export const Code: React.FC<Props> = ({ children, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const commonProps = useCommonProps<'code'>({ ...props, classNames: [styles.wrapper] });

  return <code {...commonProps}>{children}</code>;
};
