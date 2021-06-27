import React from 'react';
import { useStyles } from 'react-treat';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './code.treat';

type Props = CommonComponentProps;

export const Code: React.FC<Props> = ({ children, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const commonProps = useCommonProps({ ...props, classNames: [styles.wrapper] });

  return (
    <code {...commonProps}>
      {'`'}
      {children}
      {'`'}
    </code>
  );
};
