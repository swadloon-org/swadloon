import React, { HTMLAttributes } from 'react';

import { kebab, pascal } from 'case';

import { TITLE, Variant } from '@newrade/core-design-system';

import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';

import * as textStyles from '../styles/text-color.css';
import * as styles from './title.css';

type Props = PrimitiveProps & {
  variant?: TITLE;
  variantLevel?: Variant;
};

const defaultProps: Props = {
  variantLevel: Variant.primary,
  variant: TITLE.t1,
  children: 'Title',
};

export const Title = React.memo(
  React.forwardRef<any, Props>(function Title(
    { variant = TITLE.t1, variantLevel, id, className, children, ...props },
    ref
  ) {
    const type = variant === TITLE.t1 ? 'h1' : 'h2';
    const defaultChildrenString = `${defaultProps.children as string} ${pascal(type)}`;
    const child = children ? children : defaultChildrenString;

    return (
      <Primitive
        ref={ref}
        as={type}
        id={id ? id : typeof child === 'string' ? kebab(child) : kebab(defaultChildrenString)}
        classNames={[
          className || '',
          styles.title({
            size: variant ? variant : (defaultProps.variant as TITLE),
          }),
          textStyles.textVariants({
            variant: variantLevel ? variantLevel : (defaultProps.variantLevel as Variant),
          }),
        ]}
        {...props}
      >
        {child}
      </Primitive>
    );
  })
);
