import { TEXT_LEVEL, TITLE } from '@newrade/core-design-system';
import { kebab, pascal } from 'case';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { getMergedClassname } from '../utilities/component.utilities';
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

export const Title = React.memo(
  React.forwardRef<any, Props>(({ variant = TITLE.t1, variantLevel, id, className, children, ...props }, ref) => {
    const { styles } = useStyles(stylesRef);

    const type = variant === TITLE.t1 ? 'h1' : 'h2';
    const defaultChildrenString = `${defaultProps.children as string} ${pascal(type)}`;
    const child = children ? children : defaultChildrenString;
    const classNames = getMergedClassname([
      className || '',
      styles[variant ? variant : (defaultProps.variant as TITLE)],
      variantLevel ? styles[variantLevel] : '',
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
  })
);
