import {
  ButtonColors,
  ButtonIconStyle,
  Buttons,
  ButtonSizes,
  ButtonVariants,
} from '@newrade/core-design-system';

import { CSSButtons } from '../design-system/design-system';
import { keys, px } from '../utilities-iso/utilities';

import {
  getCSSBorderStyles,
  getCSSBoxMargin,
  getCSSBoxPadding,
  getCSSOutlineStyles,
} from './box.utilities';
import { getCSSColor } from './colors.utilities';
import { setVarsValuesToStyleObject } from './component.utilities';

export function getCSSButtons(buttons: Buttons): CSSButtons {
  //
  // first, create CSSButtons from raw styles
  //
  const cssButtons: CSSButtons = {
    variants: getCSSButtonVariants(buttons.variants),
    sizes: getCSSButtonSizes(buttons.sizes),
  };

  if (!buttons.vars) {
    return cssButtons;
  }

  //
  // if vars is passed, traverse the CSSButtons object and replace the defined values
  //
  return setVarsValuesToStyleObject<CSSButtons>(cssButtons, buttons.vars);
}

function getCSSButtonVariants(buttons: ButtonVariants): ButtonVariants<string> {
  return keys(buttons).reduce((previous, current) => {
    const variantColorStyles: ButtonColors<string> = {
      textColor: getCSSColor(buttons[current].textColor),
      textColorActive: getCSSColor(buttons[current].textColorActive),
      textColorDisabled: getCSSColor(buttons[current].textColorDisabled),
      iconColor: getCSSColor(buttons[current].iconColor),
      iconColorActive: getCSSColor(buttons[current].iconColorActive),
      iconColorDisabled: getCSSColor(buttons[current].iconColorDisabled),
      backgroundColor: getCSSColor(buttons[current].backgroundColor),
      backgroundColorActive: getCSSColor(buttons[current].backgroundColorActive),
      backgroundColorDisabled: getCSSColor(buttons[current].backgroundColorDisabled),
      borderColor: getCSSColor(buttons[current].borderColor),
      borderColorActive: getCSSColor(buttons[current].borderColorActive),
      borderColorDisabled: getCSSColor(buttons[current].borderColorDisabled),
      outlineColor: getCSSColor(buttons[current].outlineColor),
      outlineColorActive: getCSSColor(buttons[current].outlineColorActive),
      outlineColorDisabled: getCSSColor(buttons[current].outlineColorDisabled),
    };
    previous[current] = variantColorStyles;
    return previous;
  }, {} as ButtonVariants<string>);
}

function getCSSButtonSizes(buttons: ButtonSizes): ButtonSizes<string> {
  return keys(buttons).reduce((previous, current) => {
    const button = buttons[current];
    previous[current] = {
      width: px({ value: button.width }),
      height: px({ value: button.height }),
      padding: getCSSBoxPadding(button.padding),
      border: getCSSBorderStyles(button.border),
      outline: getCSSOutlineStyles(button.outline),
      ...getCSSButtonIconStyle(buttons[current]),
    };
    return previous;
  }, {} as ButtonSizes<string>);
}

function getCSSButtonIconStyle(buttonStyle: ButtonIconStyle): ButtonIconStyle<string> {
  return {
    iconSize: buttonStyle.iconSize ? px({ value: buttonStyle.iconSize }) : '',
    iconMargin: getCSSBoxMargin(buttonStyle.iconMargin),
    iconPadding: getCSSBoxPadding({ default: buttonStyle.iconPadding }).default,
    iconOnlyPadding: getCSSBoxPadding({ default: buttonStyle.iconOnlyPadding }).default,
  };
}
