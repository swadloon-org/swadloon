import React, { AnchorHTMLAttributes, useRef } from 'react';

import {
  ICON,
  LinkIcon,
  LinkProps,
  LinkVariant,
  PARAGRAPH_SIZE,
  TEXT_STYLE,
  Variant,
} from '@newrade/core-design-system';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { PrimitiveProps } from '../primitive/primitive.props';
import { getDefaultTextFromProps } from '../utilities-components/component.utilities';
import { IconComp } from '..';

import * as styles from './link.css';

type Props = PrimitiveProps &
  AnchorHTMLAttributes<any> &
  Pick<
    LinkProps,
    'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantLevel' | 'variantStyle'
  > & {
    as?: 'div' | 'a';
    /**
     * Render a long link with ellipsis in the center
     * @example https://longlong...long.com/23
     */
    shortenLongLink?: boolean;
    Icon?: React.ReactNode;
  };

const defaultProps: Props = {
  variant: LinkVariant.underline,
  variantSize: PARAGRAPH_SIZE.medium,
  variantLevel: Variant.primary,
  variantStyle: TEXT_STYLE.bold,
  children: 'Paragraph',
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
    variant = defaultProps.variant,
    variantSize = defaultProps.variantSize,
    variantLevel = defaultProps.variantLevel,
    variantStyle = defaultProps.variantStyle,
    variantIcon,
    Icon,
    shortenLongLink,
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
        styles.base,
        styles.variants({
          variant: variantLevel,
          size: variantSize,
          style: variant,
        }),
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
      <IconComp name={ICON.OPEN} className={styles.icon}></IconComp>
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
