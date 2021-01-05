import { TITLE, TEXT_LEVEL } from '@newrade/core-design-system';
import { pascal, kebab } from 'case';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import * as stylesRef from './title.treat';

type Props = CommonComponentProps &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: TITLE;
    variantLevel?: TEXT_LEVEL;
  };

const defaultProps: Props = {
  variant: TITLE.t1,
  children: 'Title',
};

export const Title: React.FC<Props> = React.memo(({ variant, variantLevel, id, className, children, ...props }) => {
  const { styles } = useStyles(stylesRef);

  const type = variant === TITLE.t1 ? 'h1' : 'h2';
  const defaultChildrenString = `${defaultProps.children as string} ${pascal(type)}`;
  const child = children ? children : defaultChildrenString;

  return React.createElement(type, {
    id: id ? id : typeof child === 'string' ? kebab(child) : kebab(defaultChildrenString),
    className: `${className || ''} ${styles[variant ? variant : (defaultProps.variant as TITLE)]} ${
      variantLevel ? styles[variantLevel] : ''
    }`,
    children: child,
    ...props,
  });
});
