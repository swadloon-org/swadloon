import { HEADING, TEXT_LEVEL } from '@newrade/core-design-system';
import { pascal } from 'case';
import React, { HTMLAttributes, useRef } from 'react';
import { useStyles } from 'react-treat';
import { usePreventPinchZoom } from '../../hooks/use-prevent-pinch-zoom';
import { CommonComponentProps } from '../../props/component-common.props';
import { getMergedClassname } from '../../utilities/component.utilities';
import { formatAnchorId } from '../../utilities/text.utilities';
import * as stylesRef from './heading.treat';

type Props = CommonComponentProps &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: HEADING;
    variantLevel?: TEXT_LEVEL;
    displayMode?: 'inline-block';
  };

const defaultProps: Props = {
  variant: HEADING.h1,
  variantLevel: TEXT_LEVEL.primary,
  children: 'Heading',
};

export const Heading = React.memo(
  React.forwardRef<any, Props>(
    ({ variant, variantLevel, displayMode, id, className, children, style, as, ...props }, ref) => {
      const { styles } = useStyles(stylesRef);
      const refLocal = ref ? (ref as React.RefObject<HTMLButtonElement>) : useRef<HTMLButtonElement>(null);

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
      const variantLevelClass = `${styles[variantLevel ? variantLevel : (defaultProps.variantLevel as TEXT_LEVEL)]}`;
      const classNames = getMergedClassname([className, styles.wrapper, variantClass, variantLevelClass]);

      usePreventPinchZoom(refLocal.current);

      const child = children ? children : defaultChildrenString;

      return React.createElement(
        type,
        {
          ref,
          id: formatAnchorId(id),
          style: displayMode ? { ...style, display: displayMode } : style,
          className: classNames,
          ...props,
        },
        child
      );
    }
  )
);
