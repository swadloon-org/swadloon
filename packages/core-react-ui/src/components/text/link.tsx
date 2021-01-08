import { LinkProps, PARAGRAPH_SIZE, LinkVariant, LinkStyleVariant, LinkState } from '@newrade/core-design-system';
import React, { AnchorHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import * as stylesRef from './link.treat';

type Props = CommonComponentProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantStyle'> & {};

export const Link: React.FC<Props> = React.memo(
  ({ variant, variantIcon, variantSize, variantStyle, className, as, AsElement, ...props }) => {
    const { styles: styles } = useStyles(stylesRef);

    const type = as ? as : 'a';
    const variantStateClassName = `${styles[LinkState.rest]}`;
    const variantClassName = `${styles[variant ? variant : LinkVariant.noUnderline]}`;
    const variantStyleClassName = styles[variantStyle ? variantStyle : LinkStyleVariant.normal];
    const variantSizeClassName = styles[variantSize ? variantSize : PARAGRAPH_SIZE.small];

    const allClassName = `${variantStateClassName} ${variantStyleClassName} ${variantSizeClassName} ${variantClassName} ${
      className || ''
    } `;

    const WrapperElement = AsElement
      ? React.cloneElement(AsElement as React.ReactElement, {
          ...props,
          className: allClassName,
        })
      : null;

    if (WrapperElement) {
      return WrapperElement;
    }

    return React.createElement(type, {
      className: allClassName,
      ...props,
    });
  }
);
