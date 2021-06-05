import {
  ButtonIcon,
  ButtonProps,
  ButtonSize,
  LABEL_SIZE,
  TEXT_STYLE,
} from '@newrade/core-design-system';
import React, { ButtonHTMLAttributes, useRef } from 'react';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { CommonComponentProps } from '../props/component-common.props';
import { Label } from '../text/label';
import { getDefaultTextFromProps, getMergedClassname } from '../utilities/component.utilities';
import * as styles from './button-v2.css';

type Props = CommonComponentProps &
  ButtonHTMLAttributes<any> &
  Pick<ButtonProps, 'icon' | 'role' | 'size' | 'state' | 'variant'> & {
    as?: 'button' | 'a' | 'div';
  } & {
    disabled?: boolean;
    loading?: boolean;
    Icon?: React.ReactNode;
    dataPressed?: boolean;
    collapsePadding?: 'left' | 'right';
  };

/**
 * General purpose button element, can be rendered using the AsElement={} prop.
 * @version 2
 */
export const ButtonV2 = React.forwardRef<any, Props>(
  (
    {
      id,
      style,
      className,
      children,
      variant,
      collapsePadding,
      as,
      AsElement,
      size,
      state,
      disabled,
      icon = ButtonIcon.right,
      Icon,
      ...props
    },
    forwardedRef
  ) => {
    const localRef = useRef<HTMLButtonElement>(null);
    const ref = forwardedRef ? (forwardedRef as React.RefObject<HTMLButtonElement>) : localRef;
    const type = as ? as : 'button';

    /**
     *
     * Icon
     *
     */

    const iconClassNames = getMergedClassname([
      // styles.base,
      // icon === ButtonIcon.right ? styles.right : '',
      // icon === ButtonIcon.left ? styles.left : '',
      // icon === ButtonIcon.icon ? styles.icon : '',
    ]);

    const IconSvg =
      icon && icon !== ButtonIcon.none && Icon
        ? React.cloneElement(Icon as React.ReactElement, {
            className: iconClassNames,
            preserveAspectRatio: `xMinYMin meet`,
          })
        : null;

    /**
     * Event handling
     */
    usePreventPinchZoom(ref.current);

    /**
     * Styles
     */
    const classNames = getMergedClassname([
      className,
      styles.base,
      styles[size ? size : ButtonSize.medium],
      // styles.primary,
      // styles[variant ? variant : Variant.primary],
    ]);
    const renderedChildren = children
      ? children
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
          {
            id,
            style,
            className: classNames,
            ref: ref,
            dataicon: `${icon}`,
            datapaddingcollapse: `${collapsePadding}`,
            ...props,
          },
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

    return (
      <button
        id={id}
        style={style}
        className={classNames}
        ref={ref}
        disabled={disabled}
        // @ts-ignore
        dataicon={`${IconSvg ? icon : ''}`}
        datapaddingcollapse={`${collapsePadding}`}
        {...props}
      >
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
