import { LABEL_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import { kebab, pascal } from 'case';
import React, { LabelHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import * as stylesRef from './label.treat';

type Props = CommonComponentProps &
  LabelHTMLAttributes<any> & {
    variant?: LABEL_SIZE;
    variantStyle?: TEXT_STYLE;
    variantLevel?: Variant;
  };

const defaultProps: Props = {
  variant: LABEL_SIZE.small,
  children: 'Label',
};

export const Label: React.FC<Props> = React.memo(
  ({ variantStyle, variant, variantLevel, className, htmlFor, children, ...props }) => {
    const { styles } = useStyles(stylesRef);

    // only render label when htmlFor is set
    const htmlForIsSet = !!htmlFor;
    const type = htmlForIsSet ? 'label' : 'div';

    const defaultChildrenString = `${defaultProps.children as string} ${pascal(
      variant || (defaultProps.variant as string)
    )} ${pascal(kebab(variantStyle || '') || '')}`;
    const child = children ? children : defaultChildrenString;

    return React.createElement(
      type,
      {
        htmlFor,
        className: `${styles.normal} ${className || ''} ${
          variant ? styles[variant as LABEL_SIZE] : styles[defaultProps.variant as LABEL_SIZE]
        } ${variantStyle ? styles[variantStyle] : ''} ${variantLevel ? styles[variantLevel] : ''}`,
        ...props,
      },
      child
    );
  }
);
