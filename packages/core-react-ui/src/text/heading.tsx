import React, { useRef } from 'react';

import { pascal } from 'case';

import { HEADING, TITLE, TYPOGRAPHIC_STYLE, Variant } from '@newrade/core-design-system';

import { Primitive } from '../primitive/primitive';
import { PrimitiveProps } from '../primitive/primitive.props';
import { TextCommonProps } from '../props/text-common.props';
import { getFormattedAnchorId } from '../utilities-iso';

import * as textStyles from '../styles/text-color.css';
import * as styles from './heading.css';

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';

type Props = PrimitiveProps<Tags> &
  TextCommonProps & {
    variant?: HEADING | TITLE;
    textStyle?: TYPOGRAPHIC_STYLE;
    variantLevel?: Variant;
    /**
     * Display or hide the '#' on hover
     */
    enableAnchorSign?: boolean;
  };

const defaultProps: Props = {
  textStyle: TYPOGRAPHIC_STYLE.sans,
  variant: HEADING.h1,
  variantLevel: Variant.primary,
  children: 'Heading',
  readableWidth: true,
};

export const Heading = React.memo(
  React.forwardRef<any, Props>(function Heading(
    {
      variant = defaultProps.variant,
      textStyle = defaultProps.textStyle,
      variantLevel = defaultProps.variantLevel,
      readableWidth = defaultProps.readableWidth,
      disableCapsize,
      enableAnchorSign,
      display,
      id,
      className,
      children = defaultProps.children,
      style,
      as,
      ...props
    } = defaultProps,
    forwardedRef
  ) {
    /**
     *
     * Refs
     *
     */

    const localRef = useRef<HTMLHeadingElement>(null);
    const ref = forwardedRef ? (forwardedRef as React.RefObject<HTMLHeadingElement>) : localRef;

    const type: Tags = as
      ? as
      : variant
      ? variant === 't1'
        ? 'h1'
        : variant === 't2'
        ? 'h2'
        : variant
      : 'h1' || 'h1';

    /**
     *
     * Styles
     *
     */

    const variantClassname = variant
      ? /t(1|2)/.test(variant)
        ? styles.variantsTitle({
            size: variant as TITLE,
            readableWidth: readableWidth,
          })
        : styles.variants({
            size: variant as HEADING,
            readableWidth: readableWidth,
          })
      : '';
    const textColorClassname = textStyles.textVariants({
      variant: variantLevel,
      disableCapsize: disableCapsize,
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

    const defaultChildrenString = `${children as string} ${pascal(type)}`;
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
