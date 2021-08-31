import { TITLE, Variant } from '@newrade/core-design-system';
import { kebab, pascal } from 'case';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { PrimitiveProps } from '../primitive/primitive.props';
import * as colorTextStylesRef from '../styles/color-text.treat';
import { getMergedClassname } from '../utilities/component.utilities';
import * as stylesRef from './title.treat';

type Props = PrimitiveProps &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: TITLE;
    variantLevel?: Variant;
  };

const defaultProps: Props = {
  variantLevel: Variant.primary,
  variant: TITLE.t1,
  children: 'Title',
};

export const Title = React.memo(
  React.forwardRef<any, Props>(
    ({ variant = TITLE.t1, variantLevel, id, className, children, ...props }, ref) => {
      const { styles, wrapper } = useStyles(stylesRef);
      const { colorTextStyles } = useStyles(colorTextStylesRef);

      const type = variant === TITLE.t1 ? 'h1' : 'h2';
      const defaultChildrenString = `${defaultProps.children as string} ${pascal(type)}`;
      const child = children ? children : defaultChildrenString;
      const classNames = getMergedClassname([
        className || '',
        wrapper,
        styles[variant ? variant : (defaultProps.variant as TITLE)],
        colorTextStyles[variantLevel ? variantLevel : (defaultProps.variantLevel as Variant)],
      ]);

      return React.createElement(
        type,
        {
          ref,
          id: id ? id : typeof child === 'string' ? kebab(child) : kebab(defaultChildrenString),
          className: classNames,
          ...props,
        },
        child
      );
    }
  )
);
