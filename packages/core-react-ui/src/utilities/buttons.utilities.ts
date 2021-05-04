import * as DS from '@newrade/core-design-system';
import {
  ButtonBoxStyle,
  ButtonColors,
  ButtonSizes,
  ButtonVariants,
  DesignSystem,
} from '@newrade/core-design-system';
import { kebab } from 'case';
import { CSSButtons, CSSButtonsVarNames } from '../design-system/css-buttons';
import { getCSSBoxStyle, getCSSVarNameForBox } from './box.utilities';
import { getCSSColor, getCSSVarForColors, getCSSVarNamesForColors } from './colors.utilities';
import { keys } from './utilities';
import { getFormattedCSSVar, getFormattedCSSVarName } from './props.utilities';

export function getCSSButtons(theme: DesignSystem): CSSButtons {
  const { colors, components } = theme;
  const { buttons } = components;

  const colorVar = getCSSVarForColors({
    colors: colors.colors,
    colorIntents: colors.colorIntents,
  });
  const colorVarNames = getCSSVarNamesForColors({
    colors: colors.colors,
    colorIntents: colors.colorIntents,
  });

  const buttonsVar = getCSSVarNameForButtons({
    buttons,
    prefix: 'btn',
    varBrackets: true,
  });
  const buttonsVarNames = getCSSVarNameForButtons({
    buttons,
    prefix: 'btn',
    varBrackets: false,
  });

  return {
    var: buttonsVar,
    varNames: buttonsVarNames,
    variants: getCSSButtonVariants(buttons.variants),
    sizes: getCSSButtonSizes(buttons.sizes),
  };
}

/**
 * Creates css variables from Buttons properties
 */
function getCSSVarNameForButtons({
  buttons,
  prefix,
  varBrackets,
}: {
  buttons: DS.Buttons;
  prefix: string;
  varBrackets: boolean;
}): CSSButtonsVarNames {
  const buttonsVarNames = {
    sizes: {},
    variants: {},
  } as CSSButtonsVarNames;
  const { variants, sizes } = buttons;

  keys(variants).forEach((variant) => {
    const currentVariant = variant as keyof CSSButtons['variants'];
    if (currentVariant && currentVariant.length) {
      // handle variant
      if (variants[currentVariant] && typeof variants[currentVariant] === 'object') {
        const buttonColors = variants[currentVariant] as ButtonColors;
        keys(buttonColors).forEach((propName) => {
          if (!buttonsVarNames['variants'][variant]) {
            // @ts-ignore
            buttonsVarNames['variants'][variant] = {};
          }
          if (varBrackets) {
            buttonsVarNames['variants'][variant][propName] = getFormattedCSSVar({
              prefix,
              category: currentVariant,
              propName,
            });
            return;
          }

          // @ts-ignore
          buttonsVarNames['variants'][variant][propName] = getFormattedCSSVarName({
            prefix,
            category: currentVariant,
            propName,
          });
          return;
        });
      }
    }
  });

  keys(sizes).forEach((size) => {
    const currentSize = size as keyof CSSButtons['sizes'];
    if (currentSize && currentSize.length) {
      // handle nested objects
      if (sizes[currentSize] && typeof sizes[currentSize] === 'object') {
        const buttonStyle = sizes[currentSize] as ButtonBoxStyle;

        // @ts-ignore
        buttonsVarNames['sizes'][size] = getCSSVarNameForBox({
          box: buttonStyle,
          prefix: `${prefix}-${size}`,
          varBrackets,
        });
      }
    }
  });

  return buttonsVarNames;
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
