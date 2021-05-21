import {
  LinkProps,
  LinkState,
  LinkVariant,
  PARAGRAPH_SIZE,
  Variant,
} from '@newrade/core-design-system';
import { IoOpenOutline } from '@react-icons/all-files/io5/IoOpenOutline';
import React, { AnchorHTMLAttributes, useRef } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../props/component-common.props';
import { getDefaultTextFromProps, getMergedClassname } from '../utilities/component.utilities';
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
    href,
    rel,
    target,
    download,
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
    const { styles } = useStyles(stylesRef);
    const ref = useRef<HTMLElement>();

    /**
     * Props
     */
    const variantStateClassName = styles[LinkState.rest];
    const variantClassName = styles[variant ? variant : LinkVariant.noUnderline];
    const variantStyleClassName = styles[variantLevel ? variantLevel : Variant.primary];
    const variantSizeClassName = styles[variantSize ? variantSize : PARAGRAPH_SIZE.medium];
    const allClassName = getMergedClassname([
      variantStateClassName,
      variantStyleClassName,
      variantSizeClassName,
      variantClassName,
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
     * Props
     */
    const compProps = {
      id,
      style,
      href,
      rel,
      target,
      className: allClassName,
      ref,
      children: (
        <>
          {renderedChildren}
          {IconSvg}
        </>
      ),
      ...props,
    };

    /**
     * Handle AsElement option
     */
    const WrapperElement = AsElement
      ? React.cloneElement(AsElement as React.ReactElement, compProps)
      : null;

    if (WrapperElement) {
      return WrapperElement;
    }

    /**
     * Render
     */
    return React.createElement(type, compProps);
  }
);
