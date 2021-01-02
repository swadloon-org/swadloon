import { HEADING } from '@newrade/core-design-system';
import { pascal, kebab } from 'case';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common-props';
import * as stylesRef from './heading.treat';

type Props = CommonComponentProps &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: HEADING;
  };

const defaultProps: Props = {
  variant: HEADING.h1,
  children: 'Heading',
};

export const Heading: React.FC<Props> = React.memo(({ variant, id, className, children, ...props }) => {
  const { styles } = useStyles(stylesRef);

  let type: keyof React.ReactHTML;

  switch (variant) {
    case HEADING.h1: {
      type = 'h1';
      break;
    }
    case HEADING.h2: {
      type = 'h2';
      break;
    }
    case HEADING.h3: {
      type = 'h3';
      break;
    }
    case HEADING.h4: {
      type = 'h4';
      break;
    }

    default: {
      type = 'h1';
      break;
    }
  }

  const defaultChildrenString = `${defaultProps.children as string} ${pascal(type)}`;
  const child = children ? children : defaultChildrenString;

  return React.createElement(type, {
    id: id ? id : typeof child === 'string' ? kebab(child) : kebab(defaultChildrenString),
    className: `${className || ''} ${styles[variant ? variant : (defaultProps.variant as HEADING)]}`,
    children: child,
    ...props,
  });
});
