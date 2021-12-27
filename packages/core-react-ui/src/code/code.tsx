import React from 'react';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as styles from './code.css';

/**
 * @typedef {Object} CodeProps
 */
type Props = PrimitiveProps<'code'>;

/**
 * @description Render an inline code block with monospaced font
 * @type {React.FC<CodeProps>}
 * @param {CodeProps} props
 */
export const Code: React.FC<Props> = ({ children, ...props }) => {
  const commonProps = useCommonProps<'code'>({ ...props, classNames: [styles.wrapper] });

  return <code {...commonProps}>{children}</code>;
};
