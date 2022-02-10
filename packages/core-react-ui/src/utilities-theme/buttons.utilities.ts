import {
  ButtonColors,
  ButtonSizes,
  ButtonVariants,
  DesignSystemV2,
} from '@newrade/core-design-system';

import { CSSButtons } from '../design-system';
import { keys } from '../utilities-iso/utilities';

import { getCSSBoxStyle } from './box.utilities';
import { getCSSColor } from './colors.utilities';

export function getCSSButtons(theme: DesignSystemV2): CSSButtons {
  const { colors, components } = theme;
  const { buttons } = components;

  return {
    variants: getCSSButtonVariants(buttons.variants),
    sizes: getCSSButtonSizes(buttons.sizes),
  };
}

function getCSSButtonVariants(buttons: ButtonVariants): ButtonVariants<string> {
  return keys(buttons).reduce((previous, current) => {
    const variantColorStyles: ButtonColors<string> = {
      backgroundColor: getCSSColor(buttons[current].backgroundColor),
    };
    previous = {
      ...previous,
      [current]: variantColorStyles,
    };
    return previous;
  }, {} as ButtonVariants<string>);
}

function getCSSButtonSizes(buttons: ButtonSizes): ButtonSizes<string> {
  return keys(buttons).reduce((previous, current) => {
    previous = {
      ...previous,
      [current]: getCSSBoxStyle(buttons[current]),
    };
    return previous;
  }, {} as ButtonSizes<string>);
}
