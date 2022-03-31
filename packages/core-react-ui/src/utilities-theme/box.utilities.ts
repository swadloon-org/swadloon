import {
  Border,
  BorderStyles,
  BoxStyle,
  DeepPartial,
  Margin,
  OutlineStyles,
  Padding,
  Radius,
} from '@newrade/core-design-system';

import { keys, px } from '../utilities-iso/utilities';

import { getCSSColor } from './colors.utilities';

export function getCSSBoxStyle(box: BoxStyle): BoxStyle<string> {
  return {
    width: px({ value: box.width }),
    height: px({ value: box.height }),
    padding: getCSSBoxPadding(box.padding),
    border: getCSSBorderStyles(box.border),
    outline: getCSSOutlineStyles(box.outline),
    backgroundColor: getCSSColor(box.backgroundColor),
  };
}

/**
 *
 * Box model
 *
 */

export function getCSSBoxPadding(padding?: DeepPartial<Padding>): Padding<string> {
  if (!padding) {
    return {
      default: '',
      top: '',
      right: '',
      bottom: '',
      left: '',
    };
  }

  return keys(padding).reduce((previous, current) => {
    previous[current] = px({ value: padding[current] });
    return previous;
  }, {} as Padding<string>);
}

export function getCSSBoxMargin(padding?: DeepPartial<Margin>): Margin<string> {
  if (!padding) {
    return {
      top: '',
      right: '',
      bottom: '',
      left: '',
    };
  }

  return keys(padding).reduce((previous, current) => {
    previous[current] = px({ value: padding[current] });
    return previous;
  }, {} as Margin<string>);
}

/**
 *
 * Borders
 *
 */

export function getCSSBorderStyles(borders?: DeepPartial<BorderStyles>): BorderStyles<string> {
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

export function getCSSBoxBorder(border?: DeepPartial<Border>): Border<string> {
  if (!border) {
    return {};
  }

  if (!(border.width || border.color || border.radius || border.style)) {
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
 *
 * Outlines
 *
 */

export function getCSSOutlineStyles(outline?: OutlineStyles): OutlineStyles<string> {
  if (!outline) {
    return {};
  }

  if (!(outline.width || outline.color || outline.radius || outline.style)) {
    return {};
  }

  return {
    color: outline.color ? getCSSColor(outline.color) : undefined,
    width: outline.width ? px({ value: outline.width }) : undefined,
    style: outline.style || 'solid',
    radius: getCSSBoxRadius(outline.radius),
  };
}

/**
 *
 * Radius
 *
 */

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
 */
export function getCSSBoxRadius(radius?: Radius): string {
  if (!radius) {
    return '';
  }

  if (radius.all) {
    return `${px({ value: radius.all })}`;
  }

  return keys(radius).reduce((previous, current) => {
    previous = [previous, `${px({ value: radius[current] })}`].filter((part) => !!part).join(' ');
    return previous;
  }, '');
}
