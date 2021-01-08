import { LinkProps, PARAGRAPH_SIZE, LinkVariant, LinkStyleVariant } from '@newrade/core-design-system';
import React, { AnchorHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import * as stylesRef from './link.treat';

type Props = CommonComponentProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantStyle'>;

export const Link: React.FC<Props> = React.memo(
  ({ variant, variantIcon, variantSize, variantStyle, className, as, ...props }) => {
    const { styles: styles } = useStyles(stylesRef);

    const type = as ? as : 'a';
    const variantClassName = `${styles[variant ? variant : LinkVariant.noUnderline]}`;
    const variantStyleClassName = styles[variantStyle ? variantStyle : LinkStyleVariant.normal];
    const variantSizeClassName = styles[variantSize ? variantSize : PARAGRAPH_SIZE.medium];

    return React.createElement(type, {
      className: `${variantStyleClassName} ${variantSizeClassName} ${variantClassName} ${className || ''} `,
      ...props,
    });
  }
);
