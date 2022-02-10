import {
  ButtonColors,
  ButtonIconStyle,
  Buttons,
  ButtonSizes,
  ButtonVariants,
} from '@newrade/core-design-system';

import { CSSButtons } from '../design-system';
import { keys, px } from '../utilities-iso/utilities';

import { getCSSBoxMargin, getCSSBoxStyle } from './box.utilities';
import { getCSSColor } from './colors.utilities';

export function getCSSButtons(buttons: Buttons): CSSButtons {
  return {
    variants: getCSSButtonVariants(buttons.variants),
    sizes: getCSSButtonSizes(buttons.sizes),
  };
}

function getCSSButtonVariants(buttons: ButtonVariants): ButtonVariants<string> {
  return keys(buttons).reduce((previous, current) => {
    const variantColorStyles: ButtonColors<string> = {
      textColor: getCSSColor(buttons[current].textColor),
      iconColor: getCSSColor(buttons[current].iconColor),
      backgroundColor: getCSSColor(buttons[current].backgroundColor),
      borderColor: getCSSColor(buttons[current].borderColor),
      outlineColor: getCSSColor(buttons[current].outlineColor),
    };
    previous[current] = variantColorStyles;
    return previous;
  }, {} as ButtonVariants<string>);
}

function getCSSButtonSizes(buttons: ButtonSizes): ButtonSizes<string> {
  return keys(buttons).reduce((previous, current) => {
    previous[current] = {
      ...getCSSBoxStyle(buttons[current]),
      ...getCSSButtonIconStyle(buttons[current]),
    };
    return previous;
  }, {} as ButtonSizes<string>);
}

function getCSSButtonIconStyle(buttonStyle: ButtonIconStyle): ButtonIconStyle<string> {
  return {
    iconSize: buttonStyle.iconSize ? px({ value: buttonStyle.iconSize }) : '',
    iconMargin: getCSSBoxMargin(buttonStyle.iconMargin),
  };
}
