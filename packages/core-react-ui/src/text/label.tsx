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
    textStyle?: TEXT_STYLE;
    variantLevel?: Variant;
    variantDisplay?: 'inline';
  };

const defaultProps: Props = {
  variantLevel: Variant.primary,
  textStyle: TEXT_STYLE.bold,
  variant: LABEL_SIZE.small,
  children: 'Label',
};

export const Label: React.FC<Props> = React.memo(
  ({
    as,
    textStyle = defaultProps.textStyle,
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
      textStyle || ''
    )}`;
    const child = children ? children : defaultChildrenString;

    const textColorClassname = textStyles.textVariants({
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
          styles.variants({
            size: variant as LABEL_SIZE,
            style: textStyle,
          }),
          // textStyle ? styles[textStyle] : styles[TEXT_STYLE.bold],
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
