import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, useRef } from 'react';

import {
  ButtonIcon,
  ButtonProps,
  ButtonSize,
  LABEL_SIZE,
  TEXT_STYLE,
  Variant,
} from '@newrade/core-design-system';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { PrimitiveProps } from '../primitive/primitive.props';
import { Label } from '../text/label';
import { getDefaultTextFromProps, getMergedClassname } from '../utilities/component.utilities';

import * as styles from './button.css';

type AsType = 'button' | 'a';

type Props = PrimitiveProps<AsType> &
  Pick<AnchorHTMLAttributes<any>, 'href' | 'target'> &
  ButtonHTMLAttributes<any> &
  Pick<ButtonProps, 'icon' | 'role' | 'size' | 'state' | 'variant'> & {
    as?: 'button' | 'a' | 'div';
  } & {
    disabled?: boolean;
    loading?: boolean;
    /**
     * Pass svg icon
     */
    Icon?: React.ReactNode;
    dataPressed?: boolean;
    collapsePadding?: 'left' | 'right';
  };

export const Button = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      role,
      children,
      variant,
      collapsePadding,
      as,
      AsElement,
      size,
      state,
      disabled,
      icon,
      Icon,
      ...props
    },
    forwardedRef
  ) => {
    const localRef = useRef<HTMLButtonElement>(null);
    const ref = forwardedRef ? (forwardedRef as React.RefObject<HTMLButtonElement>) : localRef;
    const type = as ? as : 'button';

    /**
     * Event handling
     */
    usePreventPinchZoom(ref.current);
    // usePreventLongPress(ref.current);

    /**
     * Icon
     */
    const dataicon = Icon ? (icon ? icon : ButtonIcon.right) : ButtonIcon.none;

    const iconClassNames = getMergedClassname([
      dataicon === ButtonIcon.icon ? styles.iconOnly : styles.iconBase,
      dataicon === ButtonIcon.icon ? styles.icon : '',
      dataicon === ButtonIcon.right ? styles.right : '',
      dataicon === ButtonIcon.left ? styles.left : '',
    ]);

    const IconSvg = Icon
      ? React.cloneElement(Icon as React.ReactElement, {
          className: iconClassNames,
          preserveAspectRatio: `xMinYMin meet`,
        })
      : null;

    const variantStateClassName = `${styles.base}`;
    const variantClassName = `${styles[variant ? variant : Variant.primary]}`;
    const variantSizeClassName = styles[size ? size : ButtonSize.medium];
    const collapsePaddingProp =
      dataicon === ButtonIcon.icon ? `${collapsePadding}-icon` : collapsePadding;
    const commonProps = useCommonProps<'button'>({
      id,
      style,
      className,
      role: as === 'button' ? '' : role,
      classNames: [variantStateClassName, variantSizeClassName, variantClassName, className],
      // @ts-ignore
      dataicon: dataicon,
      datapaddingcollapse: collapsePaddingProp,
      ...props,
    });

    const renderedChildren = children
      ? children
      : dataicon === ButtonIcon.icon
      ? ' '
      : getDefaultTextFromProps('button', {
          variant,
          size,
          icon,
          disabled,
        });

    function getLabelSizeForButtonSize(size?: ButtonSize): LABEL_SIZE {
      switch (size) {
        case ButtonSize.large: {
          return LABEL_SIZE.medium;
        }
        case ButtonSize.medium: {
          return LABEL_SIZE.small;
        }
        default:
        case ButtonSize.small: {
          return LABEL_SIZE.small;
        }
        case ButtonSize.xSmall: {
          return LABEL_SIZE.xSmall;
        }
      }
    }

    const CustomElement = AsElement
      ? React.cloneElement(
          AsElement as React.ReactElement,
          commonProps,
          <>
            {icon === ButtonIcon.icon ? null : (
              <Label
                variantDisplay={'inline'}
                variantStyle={TEXT_STYLE.bold}
                variant={getLabelSizeForButtonSize(size)}
              >
                {renderedChildren}
              </Label>
            )}
            {IconSvg}
          </>
        )
      : null;

    if (CustomElement) {
      return CustomElement;
    }

    const CustomElementAs =
      type !== 'button'
        ? React.createElement(
            type,
            commonProps,
            <>
              {icon === ButtonIcon.icon ? null : (
                <Label
                  variantDisplay={'inline'}
                  variantStyle={TEXT_STYLE.bold}
                  variant={getLabelSizeForButtonSize(size)}
                >
                  {renderedChildren}
                </Label>
              )}
              {IconSvg}
            </>
          )
        : null;

    if (CustomElementAs) {
      return CustomElementAs;
    }

    return (
      <button ref={ref} disabled={disabled} {...commonProps}>
        {icon === ButtonIcon.icon ? null : (
          <Label
            variantDisplay={'inline'}
            variantStyle={TEXT_STYLE.bold}
            variant={getLabelSizeForButtonSize(size)}
          >
            {renderedChildren}
          </Label>
        )}
        {IconSvg}
      </button>
    );
  }
);
