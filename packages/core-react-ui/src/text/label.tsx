import { LABEL_SIZE, TEXT_STYLE, Variant } from '@newrade/core-design-system';
import { kebab, pascal } from 'case';
import React, { LabelHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { useCommonProps } from '../hooks/use-common-props.hook';
import { CommonComponentProps } from '../props/component-common.props';
import * as stylesRef from './label.treat';

type Props = CommonComponentProps &
  LabelHTMLAttributes<any> & {
    href?: string;
    variant?: LABEL_SIZE;
    variantStyle?: TEXT_STYLE;
    variantLevel?: Variant;
    variantDisplay?: 'inline';
  };

const defaultProps: Props = {
  variant: LABEL_SIZE.small,
  children: 'Label',
};

export const Label: React.FC<Props> = React.memo(
  ({
    id,
    style,
    className,
    as,
    variantStyle,
    variant,
    variantLevel,
    variantDisplay,
    htmlFor,
    children,
    ...props
  }) => {
    const styles = useStyles(stylesRef);

    // only render label when htmlFor is set
    const htmlForIsSet = !!htmlFor;
    const type = htmlForIsSet ? 'label' : 'div';

    const defaultChildrenString = `${defaultProps.children as string} ${pascal(
      variant || (defaultProps.variant as string)
    )} ${pascal(kebab(variantStyle || '') || '')}`;
    const child = children ? children : defaultChildrenString;
    const commonProps = useCommonProps({
      id,
      style,
      className,
      classNames: [
        styles.base,
        variant ? styles[variant as LABEL_SIZE] : styles[defaultProps.variant as LABEL_SIZE],
        variantStyle ? styles[variantStyle] : styles[TEXT_STYLE.bold],
        // if inline mode don't apply colors
        variantDisplay
          ? styles[variantDisplay]
          : variantLevel
          ? styles[variantLevel]
          : styles[Variant.primary],
        ,
      ],

      ...props,
    });

    return React.createElement(
      type,
      {
        htmlFor,
        ...commonProps,
      },
      child
    );
  }
);
