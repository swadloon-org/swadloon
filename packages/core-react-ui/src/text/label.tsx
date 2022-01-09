import React, { LabelHTMLAttributes } from 'react';

import { kebab, pascal } from 'case';

import { LABEL_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { PrimitiveProps } from '../primitive/primitive.props';
import { Primitive } from '..';

import * as textStyles from '../styles/text-color.css';
import * as styles from './label.css';

type Props = PrimitiveProps &
  LabelHTMLAttributes<any> & {
    href?: string;
    variant?: LABEL_SIZE;
    variantStyle?: TEXT_STYLE;
    variantLevel?: Variant;
    variantDisplay?: 'inline';
  };

const defaultProps: Props = {
  variantLevel: Variant.primary,
  variant: LABEL_SIZE.small,
  children: 'Label',
};

export const Label: React.FC<Props> = React.memo(
  ({
    as,
    variantStyle = defaultProps.variantStyle,
    variant = defaultProps.variant,
    variantLevel = defaultProps.variantLevel,
    variantDisplay,
    htmlFor,
    children = defaultProps.children,
    ...props
  }) => {
    //
    // only render label when htmlFor is set
    //
    const htmlForIsSet = !!htmlFor;
    const type = htmlForIsSet ? 'label' : 'div';

    const defaultChildrenString = `${children as string} ${pascal(variant || '')} ${pascal(
      variantStyle || ''
    )}`;
    const child = children ? children : defaultChildrenString;

    const textColorClassname = textStyles.getTextColorStyles({
      variant: variantLevel,
    });

    return (
      <Primitive
        as={type}
        // @ts-ignore
        htmlFor={htmlFor}
        classNames={[
          styles.base,
          textColorClassname,
          styles.getVariantStyles({
            size: variant as LABEL_SIZE,
            style: variantStyle,
          }),
          // variantStyle ? styles[variantStyle] : styles[TEXT_STYLE.bold],
          // if inline mode don't apply colors
          // variantDisplay
          //   ? styles[variantDisplay]
          //   : variantLevel
          //   ? styles[variantLevel]
          //   : styles[Variant.primary],
        ]}
        {...props}
      >
        {child}
      </Primitive>
    );
  }
);
