import React from 'react';
import { useStyles } from 'react-treat';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { CommonComponentProps } from '../props/component-common.props';
import * as styleRefs from './main-wrapper.treat';

type Props = CommonComponentProps & {};

export const MainWrapper: React.FC<Props> = ({ id, style, className, as, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const type = as ? as : 'div';
  const commonProps = useCommonProps({ id, style, className, classNames: [styles.wrapper], ...props });

  return React.createElement(type, commonProps);
};
