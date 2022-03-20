import React, { useRef } from 'react';

import { ButtonIcon, ButtonSize, TEXT_STYLE, Variant } from '@newrade/core-design-system';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { Label } from '../text/label';
import { getDefaultTextFromProps, getMergedClassname } from '../utilities-iso';
import { IconComp, Primitive } from '..';

import { ButtonAsType, ButtonCompProps } from './button.props';
import { getLabelSizeForButtonSize } from './button.utilities';

import * as styles from './button.css';

type Props = ButtonCompProps;

const defaultProps: Props = {
  as: 'button',
  variant: Variant.primary,
  size: ButtonSize.medium,
  role: 'button',
};

/**
 * Main button component
 */
export const Button = React.forwardRef<any, Props>(function Button(
  {
    role = defaultProps.role,
    children,
    as = defaultProps.as,
    AsElement,
    variant = defaultProps.variant,
    collapsePadding,
    size = defaultProps.size,
    disabled,
    loading,
    icon,
    Icon,
    iconStyle,
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
  const iconClassNames = dataicon
    ? getMergedClassname([
        styles.iconVariants({
          position: dataicon as 'left',
          disabled: disabled,
        }),
      ])
    : '';

  //
  // If an SVG is passed, we use that, otherwise use the normal icon component
  //
  const IconSvg = IconSVG ? (
    React.cloneElement(IconSVG as React.ReactElement, {
      className: iconClassNames,
      preserveAspectRatio: `xMinYMin meet`,
    })
  ) : icon && Icon ? (
    <IconComp name={Icon} className={iconClassNames} style={iconStyle}></IconComp>
  ) : null;

  /**
   *
   * Rendering
   *
   */

  const type = as ? as : 'button';

  const collapsePaddingProp =
    dataicon === ButtonIcon.icon ? `${collapsePadding}-icon` : collapsePadding;

  const commonProps = useCommonProps<'button'>({
    role: as === 'button' ? undefined : role,
    classNames: [
      styles.variants({
        variant: variant,
        size: size,
      }),
    ],
    disabled: disabled ? true : false,
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

  //
  // Render the label and icon
  //
  const ButtonContent = (
    <>
      {icon === ButtonIcon.left ? IconSvg : null}
      {icon === ButtonIcon.icon ? null : (
        <Label
          variantDisplay={'inline'}
          textStyle={TEXT_STYLE.bold}
          variant={getLabelSizeForButtonSize(size)}
          className={styles.labelVariants({
            alignment: 'center',
          })}
        >
          {renderedChildren}
        </Label>
      )}
      {icon === ButtonIcon.right || icon === ButtonIcon.icon ? IconSvg : null}
    </>
  );

  /**
   * Custom Element rendering
   */

  const CustomElement = AsElement
    ? React.cloneElement(
        AsElement as React.ReactElement,
        { ...commonProps, ref },
        <>{ButtonContent}</>
      )
    : null;

  if (CustomElement) {
    return CustomElement;
  }

  /**
   * Normal element rendering
   */

  return (
    <Primitive<ButtonAsType> as={type} ref={ref} {...commonProps}>
      {ButtonContent}
    </Primitive>
  );
});
