import { PARAGRAPH_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common-props';
import * as stylesRef from './blockquote.treat';

type Props = CommonComponentProps & HTMLAttributes<HTMLHeadingElement> & {};

const defaultProps: Props = {
  children: 'Blockquote',
};

export const Blockquote: React.FC<Props> = React.memo(({ className, ...props }) => {
  const { styles } = useStyles(stylesRef);

  const type = 'blockquote';

  return React.createElement(type, {
    className: `${className || ''}  ${styles.normal}`,
    ...props,
  });
});
