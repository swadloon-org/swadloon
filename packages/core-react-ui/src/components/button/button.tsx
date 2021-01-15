import {
  ButtonProps,
  ButtonState,
  ButtonVariant,
  ButtonSize,
  ButtonIcon,
  TEXT_STYLE,
  LABEL_SIZE,
} from '@newrade/core-design-system';
import React, { ButtonHTMLAttributes, useRef } from 'react';
import { useStyles } from 'react-treat';
import * as stylesRef from './button.treat';
import { CommonComponentProps } from '../../props/component-common.props';
import { IoArrowForwardOutline, IoAddOutline } from 'react-icons/io5';
import { pascal, kebab } from 'case';
import { getDefaultTextFromProps, getMergedClassname } from '../../utilities/component.utilities';
import { Label } from '../text/label';
import { useButton } from 'react-aria';
import { AriaButtonProps } from '@react-types/button';

type Props = CommonComponentProps &
  Pick<ButtonProps, 'icon' | 'role' | 'size' | 'state' | 'variant'> &
  AriaButtonProps & { as?: 'button' | 'a' | 'div' } & {
    loading?: boolean;
    Icon?: React.ReactNode;
    dataPressed?: boolean;
  };

export const Button: React.FC<Props> = ({
  id,
  style,
  className,
  children,
  variant,
  as,
  size,
  state,
  icon,
  Icon,
  ...props
}) => {
  const { styles: styles } = useStyles(stylesRef);
  const ref = useRef<HTMLButtonElement>(null);
  const type = as ? as : 'button';
  const { buttonProps, isPressed } = useButton({ ...props, elementType: type }, ref);

  const iconClassNames = getMergedClassname([styles.icon, icon ? styles[icon] : '']);

  const IconSvg =
    Icon && icon ? (
      React.cloneElement(Icon as React.ReactElement, {
        className: iconClassNames,
        preserveAspectRatio: `xMinYMin meet`,
      })
    ) : icon ? (
      <IoAddOutline className={iconClassNames} preserveAspectRatio="xMinYMin meet" />
    ) : null;

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

  return (
    <button
      id={id}
      style={style}
      className={allClassName}
      ref={(element) => ref}
      {...buttonProps}
      // @ts-ignore
      dataicon={`${icon}`}
      datapressed={`${isPressed}`}
    >
      <Label
        style={{ display: 'inline-block' }}
        variantStyle={TEXT_STYLE.bold}
        variant={getLabelSizeForButtonSize(size)}
      >
        {renderedChildren}
      </Label>
      {IconSvg}
      {/* children: child, */}
    </button>
  );
};
