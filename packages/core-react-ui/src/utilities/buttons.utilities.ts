import * as DS from '@newrade/core-design-system';
import { ButtonColors, ButtonSizes, ButtonVariants, DesignSystem } from '@newrade/core-design-system';
import { kebab } from 'case';
import { CSSButtons, CSSButtonsVarNames } from '../design-system/css-buttons';
import { getCSSBoxStyle } from './box.utilities';
import { getCSSColor, getCSSVarForColors, getCSSVarNamesForColors } from './colors.utilities';
import { keys } from './utilities';

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
    const formattedCurrentVariant = kebab(currentVariant)
      .replace('primary', 'prim')
      .replace('secondary', 'sec')
      .replace('tertiary', 'ter');
    if (currentVariant && currentVariant.length) {
      // handle variant
      if (variants[currentVariant] && typeof variants[currentVariant] === 'object') {
        const buttonColors = variants[currentVariant] as ButtonColors;
        keys(buttonColors).forEach((prop) => {
          const formattedPropName = kebab(prop);
          // @ts-ignore
          if (!buttonsVarNames['variants'][variant]) {
            // @ts-ignore
            buttonsVarNames['variants'][variant] = {};
          }
          if (varBrackets) {
            // @ts-ignore
            buttonsVarNames['variants'][variant][
              prop
            ] = `var(--${prefix}-${formattedCurrentVariant}-${formattedPropName})`;
            return;
          }

          // @ts-ignore
          buttonsVarNames['variants'][variant][prop] = `--${prefix}-${formattedCurrentVariant}-${formattedPropName}`;
          return;
        });
      }
    }
  });

  keys(sizes).forEach((variant) => {
    const currentVariant = variant as keyof CSSButtons['variants'];
    const formattedCurrentVariant = kebab(currentVariant)
      .replace('primary', 'prim')
      .replace('secondary', 'sec')
      .replace('tertiary', 'ter');
    if (currentVariant && currentVariant.length) {
      // handle variant
      if (variants[currentVariant] && typeof variants[currentVariant] === 'object') {
        const buttonColors = variants[currentVariant] as ButtonColors;
        keys(buttonColors).forEach((prop) => {
          const formattedPropName = kebab(prop);
          // @ts-ignore
          if (!buttonsVarNames['sizes'][variant]) {
            // @ts-ignore
            buttonsVarNames['sizes'][variant] = {};
          }
          if (varBrackets) {
            // @ts-ignore
            buttonsVarNames['sizes'][variant][
              prop
            ] = `var(--${prefix}-${formattedCurrentVariant}-${formattedPropName})`;
            return;
          }

          // @ts-ignore
          buttonsVarNames['sizes'][variant][prop] = `--${prefix}-${formattedCurrentVariant}-${formattedPropName}`;
          return;
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
