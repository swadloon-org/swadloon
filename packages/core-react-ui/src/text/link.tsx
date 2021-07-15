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
import { useCommonProps } from '../hooks/use-common-props.hook';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getDefaultTextFromProps } from '../utilities/component.utilities';
import * as stylesRef from './link.treat';

type Props = PrimitiveProps &
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
    const styles = useStyles(stylesRef);
    const ref = useRef<HTMLElement>();

    /**
     * Props
     */
    const commonProps = useCommonProps({
      id,
      style,
      className,
      classNames: [
        styles[LinkState.rest],
        styles[variant ? variant : LinkVariant.noUnderline],
        styles[variantLevel ? variantLevel : Variant.primary],
        styles[variantSize ? variantSize : PARAGRAPH_SIZE.medium],
      ],
      ...props,
    });

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
    const IconSvg = Icon ? (
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
      href,
      rel,
      target,
      ref,
      children: (
        <>
          {renderedChildren}
          {IconSvg}
        </>
      ),
      ...commonProps,
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
