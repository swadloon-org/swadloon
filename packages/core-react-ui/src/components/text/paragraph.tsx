import { PARAGRAPH_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common-props';
import * as stylesRef from './paragraph.treat';

type Props = CommonComponentProps &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: PARAGRAPH_SIZE;
    variantStyle?: TEXT_STYLE;
  };

const defaultProps: Props = {
  variant: PARAGRAPH_SIZE.medium,
  children: 'Paragraph',
};

export const Paragraph: React.FC<Props> = React.memo(({ variant, variantStyle, className, ...props }) => {
  const { styles: styles } = useStyles(stylesRef);

  const type = 'p';

  return React.createElement(type, {
    className: `${className || ''} ${styles[variant ? variant : (defaultProps.variant as PARAGRAPH_SIZE)]} ${
      variantStyle ? styles[variantStyle] : ''
    }`,
    ...props,
  });
});
