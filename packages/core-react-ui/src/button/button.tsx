import {
  ButtonIcon,
  ButtonProps,
  ButtonSize,
  LABEL_SIZE,
  TEXT_STYLE,
  Variant,
} from '@newrade/core-design-system';
import React, { ButtonHTMLAttributes, useRef } from 'react';
import { useStyles } from 'react-treat';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { CommonComponentProps } from '../props/component-common.props';
import { Label } from '../text/label';
import { getDefaultTextFromProps, getMergedClassname } from '../utilities/component.utilities';
import * as stylesRef from './button.treat';

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

export const Button = React.forwardRef<any, Props>(
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
    const styles = useStyles(stylesRef);
    const localRef = useRef<HTMLButtonElement>(null);
    const ref = forwardedRef ? (forwardedRef as React.RefObject<HTMLButtonElement>) : localRef;
    const type = as ? as : 'button';
    const iconClassNames = getMergedClassname([
      styles.iconBase,
      icon === ButtonIcon.right ? styles.right : '',
      icon === ButtonIcon.left ? styles.left : '',
      icon === ButtonIcon.icon ? styles.icon : '',
    ]);

    /**
     * Event handling
     */
    usePreventPinchZoom(ref.current);
    // usePreventLongPress(ref.current);

    const IconSvg =
      icon && icon !== ButtonIcon.none && Icon
        ? React.cloneElement(Icon as React.ReactElement, {
            className: iconClassNames,
            preserveAspectRatio: `xMinYMin meet`,
          })
        : null;

    const variantStateClassName = `${styles.base}`;
    const variantClassName = `${styles[variant ? variant : Variant.primary]}`;
    const variantSizeClassName = styles[size ? size : ButtonSize.medium];
    const allClassName = getMergedClassname([
      variantStateClassName,
      variantSizeClassName,
      variantClassName,
      className,
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
        case ButtonSize.xsmall: {
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
            className: allClassName,
            ref: ref,
            dataicon: `${icon}`,
            datapaddingcollapse: `${collapsePadding}`,
            ...props,
          },
          <>
            {icon === ButtonIcon.icon ? null : (
              <Label
                style={{ display: 'inline-block', userSelect: 'none' }}
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
        className={allClassName}
        ref={ref}
        disabled={disabled}
        // @ts-ignore
        dataicon={`${IconSvg ? icon : ''}`}
        datapaddingcollapse={`${collapsePadding}`}
        {...props}
      >
        {icon === ButtonIcon.icon ? null : (
          <Label
            style={{ display: 'inline-block', userSelect: 'none' }}
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
