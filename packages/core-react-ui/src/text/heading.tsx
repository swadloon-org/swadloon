import React, { HTMLAttributes, useRef } from 'react';
import { useStyles } from 'react-treat';

import { pascal } from 'case';

import { HEADING, TYPOGRAPHIC_STYLE, Variant } from '@newrade/core-design-system';

import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { PrimitiveProps } from '../primitive/primitive.props';
import { TextCommonProps } from '../props/text-common.props';
import * as colorTextStylesRef from '../styles/color-text.treat';
import { getMergedClassname } from '../utilities/component.utilities';
import { getFormattedAnchorId } from '../utilities/text.utilities';

import * as stylesRef from './heading.treat';

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
  React.forwardRef<any, Props>(
    (
      {
        variant,
        variantLevel,
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
    ) => {
      const styles = useStyles(stylesRef);
      const { colorTextStyles } = useStyles(colorTextStylesRef);
      const localRef = useRef<HTMLHeadingElement>(null);
      const ref = forwardedRef ? (forwardedRef as React.RefObject<HTMLHeadingElement>) : localRef;

      let type: keyof JSX.IntrinsicElements;

      switch (variant) {
        case HEADING.h1: {
          type = as ? as : 'h1';
          break;
        }
        case HEADING.h2: {
          type = as ? as : 'h2';
          break;
        }
        case HEADING.h3: {
          type = as ? as : 'h3';
          break;
        }
        case HEADING.h4: {
          type = as ? as : 'h4';
          break;
        }

        default: {
          type = 'h1';
          break;
        }
      }

      const defaultChildrenString = `${defaultProps.children as string} ${pascal(type)}`;
      const variantClass = `${styles[variant ? variant : (defaultProps.variant as HEADING)]}`;
      const classNames = getMergedClassname([
        className,
        styles.wrapper,
        variantClass,
        colorTextStyles[variantLevel ? variantLevel : (defaultProps.variantLevel as Variant)],
        enableAnchorSign ? 'mdx-anchor-sign-enable' : '',
      ]);

      usePreventPinchZoom(ref.current);

      const child = children ? children : defaultChildrenString;
      const renderedId = getFormattedAnchorId(
        id ? id : typeof children === 'string' ? children : ''
      );

      return React.createElement(
        type,
        {
          ref: forwardedRef,
          // id: ,
          style: display ? { ...style, display: display } : style,
          className: classNames,
          ...props,
        },
        <>
          <span className={`mdx-anchor-target`} id={renderedId}></span>
          {child}
        </>
      );
    }
  )
);
