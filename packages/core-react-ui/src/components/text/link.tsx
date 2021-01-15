import { LinkProps, PARAGRAPH_SIZE, LinkVariant, LinkStyleVariant, LinkState } from '@newrade/core-design-system';
import React, { AnchorHTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import * as stylesRef from './link.treat';
import { IoOpenOutline } from 'react-icons/io5';
import { getDefaultTextFromProps } from '../../utilities/component.utilities';

type Props = CommonComponentProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantStyle'> & {
    Icon?: React.ReactNode;
  };

export const Link: React.FC<Props> = React.memo(
  ({
    id,
    style,
    className,
    variant,
    variantIcon,
    Icon,
    variantSize,
    variantStyle,
    as,
    AsElement,
    children,
    ...props
  }) => {
    const { styles: styles } = useStyles(stylesRef);

    const type = as ? as : 'a';
    const variantStateClassName = `${styles[LinkState.rest]}`;
    const variantClassName = `${styles[variant ? variant : LinkVariant.noUnderline]}`;
    const variantStyleClassName = styles[variantStyle ? variantStyle : LinkStyleVariant.normal];
    const variantSizeClassName = styles[variantSize ? variantSize : PARAGRAPH_SIZE.small];
    const allClassName = `${variantStateClassName} ${variantStyleClassName} ${variantSizeClassName} ${variantClassName} ${
      className || ''
    } `;
    const renderedChildren = children
      ? children
      : getDefaultTextFromProps('link', {
          variant,
          variantStyle,
          variantSize,
          variantIcon,
        });

    const IconSvg =
      variantIcon && Icon ? (
        React.cloneElement(Icon as React.ReactElement, {
          className: styles.icon,
        })
      ) : variantIcon ? (
        <IoOpenOutline className={styles.icon} />
      ) : null;

    const WrapperElement = AsElement
      ? React.cloneElement(AsElement as React.ReactElement, {
          id,
          style,
          className: allClassName,
          children: (
            <>
              {renderedChildren}
              {IconSvg}
            </>
          ),
          ...props,
        })
      : null;

    if (WrapperElement) {
      return WrapperElement;
    }

    return React.createElement(
      type,
      {
        id,
        style,
        className: allClassName,
        ...props,
      },
      <>
        {renderedChildren}
        {IconSvg}
      </>
    );
  }
);
