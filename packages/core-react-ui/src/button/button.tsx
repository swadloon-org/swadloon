import React, { useRef } from 'react';

import { ButtonIcon, ButtonSize, TEXT_STYLE, Variant } from '@newrade/core-design-system';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { Label } from '../text/label';
import { getDefaultTextFromProps, getMergedClassname } from '../utilities-iso';

import { ButtonCompProps } from './button.props';
import { getLabelSizeForButtonSize } from './button.utilities';

import * as styles from './button.css';

type Props = ButtonCompProps;

const defaultProps: Props = {
  size: ButtonSize.medium,
};

export const Button = React.forwardRef<any, Props>(function Button(
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
    size = defaultProps.size,
    disabled,
    loading,
    icon,
    Icon,
    IconSVG,
    ...props
  },
  forwardedRef
) {
  /**
   *
   * Ref forwarding
   *
   */

  const localRef = useRef<HTMLButtonElement>(null);
  const ref = forwardedRef ? (forwardedRef as React.RefObject<HTMLButtonElement>) : localRef;

  /**
   *
   * Event handling
   *
   */

  usePreventPinchZoom(ref.current);
  // usePreventLongPress(ref.current);

  /**
   *
   * Icon
   *
   */

  const dataicon = Icon ? (icon ? icon : ButtonIcon.right) : ButtonIcon.none;

  const iconClassNames = getMergedClassname([
    dataicon === ButtonIcon.icon ? styles.iconOnly : styles.iconBase,
    dataicon === ButtonIcon.icon ? styles.icon : '',
    dataicon === ButtonIcon.right ? styles.right : '',
    dataicon === ButtonIcon.left ? styles.left : '',
  ]);

  const IconSvg = IconSVG
    ? React.cloneElement(IconSVG as React.ReactElement, {
        className: iconClassNames,
        preserveAspectRatio: `xMinYMin meet`,
      })
    : null;

  /**
   *
   * Rendering
   *
   */

  const type = as ? as : 'button';

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

  const CustomElement = AsElement
    ? React.cloneElement(
        AsElement as React.ReactElement,
        commonProps,
        <>
          {icon === ButtonIcon.icon ? null : (
            <Label
              variantDisplay={'inline'}
              textStyle={TEXT_STYLE.bold}
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
                textStyle={TEXT_STYLE.bold}
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
          textStyle={TEXT_STYLE.bold}
          variant={getLabelSizeForButtonSize(size)}
        >
          {renderedChildren}
        </Label>
      )}
      {IconSvg}
    </button>
  );
});
