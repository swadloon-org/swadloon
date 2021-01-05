import { PARAGRAPH_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import React, { HTMLAttributes, useState, AnchorHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import * as stylesRef from './link.treat';

export enum LINK_STYLE {
  normal = 'normal',
  underLine = 'underLine',
}

type Props = CommonComponentProps &
  AnchorHTMLAttributes<any> & {
    variantStyle?: LINK_STYLE;
    icon?: string | undefined;
    variantState?: 'normal' | 'disabled' | 'hover' | 'focused';
  };

const defaultProps: Props = {
  variantStyle: LINK_STYLE.normal,
  children: 'Link',
  variantState: 'normal',
};

export const Link: React.FC<Props> = React.memo(({ variantStyle, variantState, className, ...props }) => {
  const { styles: styles } = useStyles(stylesRef);

  const type = 'a';
  return React.createElement(type, {
    className: `${className || ''} ${styles[variantStyle ? variantStyle : (defaultProps.variantStyle as LINK_STYLE)]}`,
    ...props,
  });
});
