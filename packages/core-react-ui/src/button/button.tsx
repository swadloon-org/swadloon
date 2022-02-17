import React, { useRef } from 'react';

import { ButtonIcon, ButtonSize, TEXT_STYLE } from '@newrade/core-design-system';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { Label } from '../text/label';
import { getDefaultTextFromProps, getMergedClassname } from '../utilities-iso';
import { Primitive } from '..';

import { ButtonAsType, ButtonCompProps } from './button.props';
import { getLabelSizeForButtonSize } from './button.utilities';

import * as styles from './button.css';

type Props = ButtonCompProps;

const defaultProps: Props = {
  size: ButtonSize.medium,
};

/**
 * Main button component
 */
export const Button = React.forwardRef<any, Props>(function Button(
  {
    role,
    children,
    as,
    AsElement,
    variant,
    collapsePadding,
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
    // dataicon === ButtonIcon.icon ? styles.iconOnly : styles.iconBase,
    // dataicon === ButtonIcon.icon ? styles.icon : '',
    // dataicon === ButtonIcon.right ? styles.right : '',
    // dataicon === ButtonIcon.left ? styles.left : '',
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

  // const variantStateClassName = `${styles.base}`;
  // const variantClassName = `${styles[variant ? variant : Variant.primary]}`;
  // const variantSizeClassName = styles[size ? size : ButtonSize.medium];
  const collapsePaddingProp =
    dataicon === ButtonIcon.icon ? `${collapsePadding}-icon` : collapsePadding;

  const commonProps = useCommonProps<'button'>({
    role: as === 'button' ? '' : role,
    classNames: [styles.variants({})],
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

  const ButtonContent = (
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
  );

  const CustomElement = AsElement
    ? React.cloneElement(AsElement as React.ReactElement, commonProps, <>{ButtonContent}</>)
    : null;

  if (CustomElement) {
    return CustomElement;
  }

  return (
    <Primitive<ButtonAsType> as={type} ref={ref} {...commonProps}>
      {ButtonContent}
    </Primitive>
  );
});
