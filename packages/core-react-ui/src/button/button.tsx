import {
  ButtonIcon,
  ButtonProps,
  ButtonSize,
  ButtonState,
  ButtonVariant,
  LABEL_SIZE,
  TEXT_STYLE,
} from '@newrade/core-design-system';
import { AriaButtonProps } from '@react-types/button';
import React, { useRef } from 'react';
import { useButton } from 'react-aria';
import { useStyles } from 'react-treat';
import { usePreventPinchZoom } from '../';
import { CommonComponentProps } from '../props/component-common.props';
import { Label } from '../text/label';
import { getDefaultTextFromProps, getMergedClassname } from '../utilities/component.utilities';
import * as stylesRef from './button.treat';

type Props = CommonComponentProps &
  Pick<ButtonProps, 'icon' | 'role' | 'size' | 'state' | 'variant'> &
  AriaButtonProps & { as?: 'button' | 'a' | 'div' } & {
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
      icon = ButtonIcon.right,
      Icon,
      ...props
    },
    forwardedRef
  ) => {
    const { styles } = useStyles(stylesRef);
    const localRef = useRef<HTMLButtonElement>(null);
    const ref = forwardedRef ? (forwardedRef as React.RefObject<HTMLButtonElement>) : localRef;
    const type = as ? as : 'button';
    const { buttonProps, isPressed } = useButton({ ...props, elementType: type }, ref as any);

    const iconClassNames = getMergedClassname([styles.iconBase, icon ? styles[icon] : '']);

    usePreventPinchZoom(ref.current);
    // usePreventLongPress(ref.current);

    const IconSvg =
      icon && icon !== ButtonIcon.none && Icon
        ? React.cloneElement(Icon as React.ReactElement, {
            className: iconClassNames,
            preserveAspectRatio: `xMinYMin meet`,
          })
        : null;

    const variantStateClassName = `${styles[ButtonState.rest]}`;
    const variantClassName = `${styles[variant ? variant : ButtonVariant.primary]}`;
    const variantSizeClassName = styles[size ? size : ButtonSize.medium];
    const activeClassName = isPressed ? styles.pressed : '';
    const allClassName = getMergedClassname([
      variantStateClassName,
      variantSizeClassName,
      variantClassName,
      activeClassName,
      className,
    ]);
    const renderedChildren = children
      ? children
      : getDefaultTextFromProps('button', {
          variant,
          size,
          icon,
          disabled: props.isDisabled,
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
            ...buttonProps,
            dataicon: `${icon}`,
            datapressed: `${isPressed}`,
            datapaddingcollapse: `${collapsePadding}`,
          },
          <>
            {icon === ButtonIcon.icon ? null : (
              <Label
                style={{ display: 'inline-block' }}
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
        {...buttonProps}
        // @ts-ignore
        dataicon={`${IconSvg ? icon : ''}`}
        datapressed={`${isPressed}`}
        datapaddingcollapse={`${collapsePadding}`}
      >
        {icon === ButtonIcon.icon ? null : (
          <Label
            style={{ display: 'inline-block' }}
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
