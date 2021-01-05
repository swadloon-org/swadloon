import { LABEL_SIZE, TEXT_STYLE, TEXT_LEVEL } from '@newrade/core-design-system';
import React, { LabelHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import * as stylesRef from './label.treat';
import { pascal, snake, kebab } from 'case';

type Props = CommonComponentProps &
  LabelHTMLAttributes<any> & {
    variantStyle?: TEXT_STYLE;
    variant?: LABEL_SIZE;
    variantLevel?: TEXT_LEVEL;
  };

const defaultProps: Props = {
  variant: LABEL_SIZE.small,
  children: 'Label',
};

export const Label: React.FC<Props> = React.memo(
  ({ variantStyle, variant, variantLevel, className, htmlFor, children, ...props }) => {
    const { styles } = useStyles(stylesRef);

    const htmlForIsSet = !!htmlFor;
    const type = htmlForIsSet ? 'label' : 'div';
    const defaultChildrenString = `${defaultProps.children as string} ${pascal(
      variant || (defaultProps.variant as string)
    )} ${pascal(kebab(variantStyle || '') || '')}`;
    const child = children ? children : defaultChildrenString;

    return React.createElement(type, {
      className: `${className || ''} ${
        variant ? styles[variant as LABEL_SIZE] : styles[defaultProps.variant as LABEL_SIZE]
      } ${variantStyle ? styles[variantStyle] : ''} ${variantLevel ? styles[variantLevel] : ''}`,
      children: child,
      ...props,
    });
  }
);
