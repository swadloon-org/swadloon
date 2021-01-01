import { LABEL_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { pascal, kebab } from 'case';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common-props';
import * as stylesRef from './label.treat';

type Props = CommonComponentProps &
  HTMLAttributes<HTMLHeadingElement> & {
    variantStyle?: TEXT_STYLE;
    size?: LABEL_SIZE;
  };

const defaultProps: Props = {
  size: LABEL_SIZE.medium,
};

export const Label: React.FC<Props> = React.memo(({ variantStyle, size, className, ...props }) => {
  const { styles } = useStyles(stylesRef);

  const type = 'label';

  return React.createElement(type, {
    className: `${className || ''} ${styles[variantStyle as TEXT_STYLE]} ${
      styles[size ? size : (defaultProps.size as LABEL_SIZE)]
    } `,
    ...props,
  });
});
