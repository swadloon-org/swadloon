import React from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { PaddingProps } from '../props/padding.props';
import * as styleRefs from './box-v2.treat';

type Props = CommonComponentProps &
  Partial<{
    padding?: PaddingProps;
  }>;

/**
 *
 * **********************
 * **********************
 * **                  **
 * **     content      **
 * **                  **
 * **********************
 * **********************
 */
export const BoxV2: React.FC<Props> = ({ as, style, className, padding, ...props }) => {
  const { styles } = useStyles(styleRefs);

  // default to <div></div> element
  const type = as ? as : 'div';

  const mergedClassName = `${className || ''} ${styles.wrapper}`;

  return React.createElement(type, {
    style: {
      ...style,
      padding: padding?.join(' '),
    },
    className: mergedClassName,
    ...props,
  });
};
