import { LinkProps, LinkState, LinkVariant, PARAGRAPH_SIZE, TEXT_LEVEL } from '@newrade/core-design-system';
import React, { AnchorHTMLAttributes, useRef } from 'react';
import { useButton } from 'react-aria';
import { IoOpenOutline } from 'react-icons/io5';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common.props';
import { getDefaultTextFromProps, getMergedClassname } from '../../utilities/component.utilities';
import * as stylesRef from './link.treat';

type Props = CommonComponentProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantLevel'> & {
    as?: 'div' | 'a';
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
    variantLevel,
    as,
    AsElement,
    children,
    ...props
  }) => {
    const type = as ? as : 'a';

    /**
     * Hooks
     */
    const { styles: styles } = useStyles(stylesRef);
    let ref = useRef();
    // @ts-ignore
    let { buttonProps, isPressed } = useButton({ ...props, elementType: type }, ref);

    /**
     * Props
     */
    const variantStateClassName = styles[LinkState.rest];
    const variantClassName = styles[variant ? variant : LinkVariant.noUnderline];
    const variantStyleClassName = styles[variantLevel ? variantLevel : TEXT_LEVEL.primary];
    const variantSizeClassName = styles[variantSize ? variantSize : PARAGRAPH_SIZE.small];
    const activeClassName = isPressed ? styles.active : '';
    const allClassName = getMergedClassname([
      variantStateClassName,
      variantStyleClassName,
      variantSizeClassName,
      variantClassName,
      activeClassName,
      className,
    ]);

    /**
     * Default children
     */
    const renderedChildren = children
      ? children
      : getDefaultTextFromProps('link', {
          variant,
          variantLevel,
          variantSize,
          variantIcon,
        });

    /**
     * Icon insertion
     */
    const IconSvg =
      variantIcon && Icon ? (
        React.cloneElement(Icon as React.ReactElement, {
          className: styles.icon,
          preserveAspectRatio: `xMinYMin meet`,
        })
      ) : variantIcon ? (
        <IoOpenOutline className={styles.icon} preserveAspectRatio="xMinYMin meet" />
      ) : null;

    /**
     * Handle AsElement option
     */
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
          ref,
          ...buttonProps,
        })
      : null;

    if (WrapperElement) {
      return WrapperElement;
    }

    /**
     * Render
     */
    return React.createElement(
      type,
      {
        id,
        style,
        className: allClassName,
        ref,
        ...buttonProps,
      },
      <>
        {isPressed}
        {renderedChildren}
        {IconSvg}
      </>
    );
  }
);
