import { HEADING, Variant } from '@newrade/core-design-system';
import { pascal } from 'case';
import React, { HTMLAttributes, useRef } from 'react';
import { useStyles } from 'react-treat';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { CommonComponentProps } from '../props/component-common.props';
import { TextCommonProps } from '../props/text-common.props';
import * as colorTextStylesRef from '../styles/color-text.treat';
import { getMergedClassname } from '../utilities/component.utilities';
import { formatAnchorId } from '../utilities/text.utilities';
import * as stylesRef from './heading.treat';

type Props = CommonComponentProps &
  TextCommonProps &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: HEADING;
    variantLevel?: Variant;
  };

const defaultProps: Props = {
  variant: HEADING.h1,
  variantLevel: Variant.primary,
  children: 'Heading',
};

export const Heading = React.memo(
  React.forwardRef<any, Props>(
    ({ variant, variantLevel, display, id, className, children, style, as, ...props }, forwardedRef) => {
      const { styles } = useStyles(stylesRef);
      const { colorTextStyles } = useStyles(colorTextStylesRef);
      const localRef = useRef<HTMLButtonElement>(null);
      const ref = forwardedRef ? (forwardedRef as React.RefObject<HTMLButtonElement>) : localRef;

      let type: keyof React.ReactHTML;

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
      const variantLevelClass = `${
        colorTextStyles[variantLevel ? variantLevel : (defaultProps.variantLevel as Variant)]
      }`;
      const classNames = getMergedClassname([className, styles.wrapper, variantClass, variantLevelClass]);

      usePreventPinchZoom(ref.current);

      const child = children ? children : defaultChildrenString;

      return React.createElement(
        type,
        {
          ref: forwardedRef,
          id: formatAnchorId(id ? id : typeof children === 'string' ? children : ''),
          style: display ? { ...style, display: display } : style,
          className: classNames,
          ...props,
        },
        child
      );
    }
  )
);
