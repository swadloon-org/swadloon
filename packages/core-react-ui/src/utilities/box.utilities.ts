import * as DS from '@newrade/core-design-system';
import { Border, BorderStyles, BoxStyle, Radius } from '@newrade/core-design-system';

import { CSSBoxVarNames } from '../design-system/css-box';

import { getCSSColor } from './colors.utilities';
import { getFormattedCSSVar, getFormattedCSSVarName } from './props.utilities';
import { keys, px } from './utilities';

export function getCSSBoxStyle(box: BoxStyle): BoxStyle<string> {
  return {
    width: px({ value: box.width }),
    height: px({ value: box.height }),
    // padding: box.padding,
    border: getCSSBorderStyles(box.border),
    padding: {},
    outline: {},
    // outline: box.outline,
    // backgroundColor: box.backgroundColor,
  };
}

export function getCSSBorderStyles(borders?: BorderStyles): BorderStyles<string> {
  if (!borders) {
    return {
      default: {},
      top: {},
      right: {},
      bottom: {},
      left: {},
    };
  }

  return keys(borders).reduce((previous, current) => {
    return { ...previous, [current]: getCSSBoxBorder(borders[current]) };
  }, {} as BorderStyles<string>);
}

export function getCSSBoxBorder(border?: Border): Border<string> {
  if (!border) {
    return {};
  }

  return {
    color: border.color ? getCSSColor(border.color) : undefined,
    width: border.width ? px({ value: border.width }) : undefined,
    style: border.style || 'solid',
    radius: getCSSBoxRadius(border.radius),
  };
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
 */
export function getCSSBoxRadius(radius?: Radius): string {
  if (!radius) {
    return '';
  }

  return radius.all
    ? `${px({ value: radius.all })}`
    : `${radius.topLeft} ${radius.topRight} ${radius.bottomRight} ${radius.bottomLeft}`;
}

export function getCSSVarNameForBox({
  box,
  prefix,
  varBrackets,
}: {
  box: DS.BoxStyle;
  prefix: string;
  varBrackets: boolean;
}): CSSBoxVarNames {
  const formatter = varBrackets ? getFormattedCSSVar : getFormattedCSSVarName;

  return {
    width: formatter({
      prefix,
      propName: 'width',
    }),
    height: formatter({
      prefix,
      propName: 'height',
    }),
    backgroundColor: formatter({
      prefix,
      propName: 'backgroundColor',
    }),
    padding: {
      default: formatter({
        prefix,
        category: 'padding',
        propName: '',
      }),
      top: formatter({
        prefix,
        category: 'padding',
        propName: 'top',
      }),
      right: formatter({
        prefix,
        category: 'padding',
        propName: 'right',
      }),
      bottom: formatter({
        prefix,
        category: 'padding',
        propName: 'bottom',
      }),
      left: formatter({
        prefix,
        category: 'padding',
        propName: 'left',
      }),
    },
    // @ts-ignore
    border: {
      default: {
        color: formatter({
          prefix,
          category: 'border',
          propName: 'color',
        }),
        style: formatter({
          prefix,
          category: 'border',
          propName: 'style',
        }) as 'solid' | 'dotted',
        width: formatter({
          prefix,
          category: 'border',
          propName: 'width',
        }),
        radius: formatter({
          prefix,
          category: 'border',
          propName: 'radius',
        }),
      },
    },
    outline: {
      color: formatter({
        prefix,
        category: 'out',
        propName: 'color',
      }),
      style: formatter({
        prefix,
        category: 'out',
        propName: 'style',
      }) as 'solid' | 'dotted',
      width: formatter({
        prefix,
        category: 'out',
        propName: 'width',
      }),
      radius: formatter({
        prefix,
        category: 'out',
        propName: 'radius',
      }),
    },
  };
}
