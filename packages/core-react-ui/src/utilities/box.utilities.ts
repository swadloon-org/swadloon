import { Border, BorderStyles, BoxStyle, Radius } from '@newrade/core-design-system';
import { getCSSColor } from './colors.utilities';
import { keys, px } from './utilities';

export function getCSSBoxStyle(box: BoxStyle): BoxStyle<string> {
  return {
    width: px({ value: box.width }),
    height: px({ value: box.height }),
    // padding: box.padding,
    border: getCSSBorderStyles(box.border),
    // outline: box.outline,
    // backgroundColor: box.backgroundColor,
  };
}

export function getCSSBorderStyles(borders?: BorderStyles): BorderStyles<string> | undefined {
  if (!borders) {
    return undefined;
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
    ? `${radius.all}`
    : `${radius.topLeft} ${radius.topRight} ${radius.bottomRight} ${radius.bottomLeft}`;
}
