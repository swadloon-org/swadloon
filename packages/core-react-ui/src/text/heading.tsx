import React, { HTMLAttributes, useRef } from 'react';

import { pascal } from 'case';

import { HEADING, TYPOGRAPHIC_STYLE, Variant } from '@newrade/core-design-system';

import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';
import { TextCommonProps } from '../props/text-common.props';
import { getFormattedAnchorId } from '../utilities/text.utilities';

import * as textStyles from '../styles/text-color.css';
import * as styles from './heading.css';

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';

type Props = PrimitiveProps<Tags> &
  TextCommonProps &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: HEADING;
    variantStyle?: TYPOGRAPHIC_STYLE;
    variantLevel?: Variant;
    /**
     * Display or hide the '#' on hover
     */
    enableAnchorSign?: boolean;
  };

const defaultProps: Props = {
  variantStyle: TYPOGRAPHIC_STYLE.sans,
  variant: HEADING.h1,
  variantLevel: Variant.primary,
  children: 'Heading',
};

export const Heading = React.memo(
  React.forwardRef<any, Props>(function Heading(
    {
      variant,
      variantLevel,
      disableCapsize,
      enableAnchorSign,
      display,
      id,
      className,
      children,
      style,
      as,
      ...props
    },
    forwardedRef
  ) {
    /**
     *
     * Refs
     *
     */

    const localRef = useRef<HTMLHeadingElement>(null);
    const ref = forwardedRef ? (forwardedRef as React.RefObject<HTMLHeadingElement>) : localRef;

    const type: Tags = variant || 'h1';

    /**
     *
     * Styles
     *
     */

    const variantClassname = styles.getVariantStyles({
      size: variant,
      disableCapsize: disableCapsize,
    });
    const textColorClassname = textStyles.getTextColorStyles({
      variant: variantLevel || Variant.primary,
    });
    const classNames = [
      className,
      styles.base,
      variantClassname,
      textColorClassname,
      enableAnchorSign ? 'mdx-anchor-sign-enable' : '',
    ];

    /**
     *
     * Rendering
     *
     */

    const defaultChildrenString = `${defaultProps.children as string} ${pascal(type)}`;
    const child = children ? children : defaultChildrenString;
    const renderedId = getFormattedAnchorId(id ? id : typeof children === 'string' ? children : '');

    return (
      <Primitive
        as={type}
        ref={ref}
        style={display ? { ...style, display: display } : style}
        classNames={classNames}
        {...props}
      >
        <span className={`mdx-anchor-target`} id={renderedId}></span>
        {child}
      </Primitive>
    );
  })
);
