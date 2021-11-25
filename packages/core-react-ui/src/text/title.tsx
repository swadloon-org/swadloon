import React, { HTMLAttributes } from 'react';

import { kebab, pascal } from 'case';

import { TITLE, Variant } from '@newrade/core-design-system';

import { PrimitiveProps } from '../primitive/primitive.props';
import { getMergedClassname } from '../utilities/component.utilities';

import * as textStyles from '../styles/color-text.css';
import * as styles from './title.css';

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
      const type = variant === TITLE.t1 ? 'h1' : 'h2';
      const defaultChildrenString = `${defaultProps.children as string} ${pascal(type)}`;
      const child = children ? children : defaultChildrenString;
      const classNames = getMergedClassname([
        className || '',
        styles.title({
          size: variant ? variant : (defaultProps.variant as TITLE),
        }),
        textStyles.colorText({
          variant: variantLevel ? variantLevel : (defaultProps.variantLevel as Variant),
        }),
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
