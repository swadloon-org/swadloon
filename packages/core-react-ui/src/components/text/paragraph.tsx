import { PARAGRAPH_SIZE } from '@newrade/core-design-system';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common-props';
import * as stylesRef from './paragraph.treat';

type Props = CommonComponentProps &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: PARAGRAPH_SIZE;
  };

const defaultProps: Props = {
  variant: PARAGRAPH_SIZE.medium,
  children: 'Title',
};

export const Paragraph: React.FC<Props> = React.memo(({ variant, className, ...props }) => {
  const { styles } = useStyles(stylesRef);

  const type = 'p';

  return React.createElement(type, {
    className: `${className || ''} ${styles[variant ? variant : (defaultProps.variant as PARAGRAPH_SIZE)]}`,
    ...props,
  });
});
