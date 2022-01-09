import React, { AnchorHTMLAttributes, useRef } from 'react';
import { IoOpenOutline } from 'react-icons/io5';

import {
  LinkIcon,
  LinkProps,
  LinkState,
  LinkVariant,
  PARAGRAPH_SIZE,
  Variant,
} from '@newrade/core-design-system';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getDefaultTextFromProps } from '../utilities/component.utilities';

import * as styles from './link.css';

type Props = PrimitiveProps &
  AnchorHTMLAttributes<any> &
  Pick<
    LinkProps,
    'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantLevel' | 'variantStyle'
  > & {
    as?: 'div' | 'a';
    shortenLongLink?: boolean;
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
    shortenLongLink,
    variantSize,
    variantLevel,
    variantStyle,
    as,
    AsElement,
    children,
    ...props
  }) => {
    const type = as ? as : 'a';

    /**
     * Hooks
     */

    const ref = useRef<HTMLElement>();

    /**
     * External links
     */
    const linkIsExternal = href && /https?:\/\//.test(href);

    /**
     * Icon
     */

    /**
     * Props
     */
    const commonProps = useCommonProps<'a'>({
      id,
      style,
      className,
      classNames: [
        styles[LinkState.rest],
        styles[variant ? variant : LinkVariant.noUnderline],
        styles[variantLevel ? variantLevel : Variant.primary],
        styles[variantSize ? variantSize : PARAGRAPH_SIZE.medium],
      ],
      target: target ? target : linkIsExternal ? '_blank' : undefined,
      ...props,
    });

    /**
     * Default children
     */
    const renderedChildren = children
      ? typeof children === 'string'
        ? shortenLongLink
          ? getShortLink(children)
          : children
        : children
      : getDefaultTextFromProps('link', {
          variant,
          variantLevel,
          variantSize,
          variantIcon,
        });

    function getShortLink(linkStr?: string) {
      if (!linkStr) {
        return '';
      }
      if (linkStr.length > 20) {
        return [linkStr.substring(0, 20), '...', linkStr.substring(linkStr.length - 20)].join('');
      }

      return linkStr;
    }

    /**
     * Icon insertion
     */
    const IconSvg = Icon ? (
      React.cloneElement(Icon as React.ReactElement, {
        className: styles.icon,
        preserveAspectRatio: `xMinYMin meet`,
      })
    ) : variantIcon !== LinkIcon.none && linkIsExternal ? (
      <IoOpenOutline className={styles.icon}></IoOpenOutline>
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
      ...(AsElement && (AsElement as React.ReactElement).props
        ? (AsElement as React.ReactElement).props
        : {}),
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
