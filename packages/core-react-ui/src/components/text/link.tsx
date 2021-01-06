import { PARAGRAPH_SIZE, TEXT_STYLE, TEXT_LEVEL, LINK_STYLE } from '@newrade/core-design-system';
import React, { HTMLAttributes, useState, AnchorHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import * as stylesRef from './link.treat';

type Props = CommonComponentProps &
  AnchorHTMLAttributes<any> & {
    variantLinkStyle?: LINK_STYLE;
    icon?: string | undefined;
    variantStyle?: TEXT_STYLE;
    variantLevel?: TEXT_LEVEL;
  };

const defaultProps: Props = {
  variantLinkStyle: LINK_STYLE.normal,
  children: 'Link',
};

export const Link: React.FC<Props> = React.memo(
  ({ variantLinkStyle, icon, variantStyle, variantLevel, className, ...props }) => {
    const { styles: styles } = useStyles(stylesRef);

    const type = 'a';
    return React.createElement(type, {
      className: `${className || ''} ${
        styles[variantLinkStyle ? variantLinkStyle : (defaultProps.variantLinkStyle as LINK_STYLE)]
      }`,
      ...props,
    });
  }
);
