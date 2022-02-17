import { MediaQueryGroup } from './foundations/media-queries';
import { FONT_VARIANT_NUMERIC, TEXT_TRANSFORM, TextDecoration } from './foundations/text';
import { Color } from './primitives/color';
import { Radius } from './primitives/radius';

/**
 *
 * General types
 *
 */

export type NumberType<Override extends undefined | string> = Override extends string
  ? string
  : number;

export type PercentType<Override extends undefined | string> = Override extends string
  ? string
  : number;

/**
 *
 * Colors
 *
 */

export type ColorType<Override extends undefined | string> = Override extends string
  ? string
  : Color;

/**
 * Effects
 */

/**
 *
 * Font and text types
 *
 */

export type FontWeightType<Override extends undefined | string> = Override extends string
  ? string
  : number;

/**
 * 3 => '3%'
 */
export type LetterSpacingType<Override extends undefined | string> = Override extends string
  ? string
  : number;

export type TextTransformType<Override extends undefined | string> = Override extends string
  ? string
  : TEXT_TRANSFORM;

export type TextDecorationType<Override extends undefined | string> = Override extends string
  ? string
  : TextDecoration;

export type FontVariantNumericType<Override extends undefined | string> = Override extends string
  ? string
  : FONT_VARIANT_NUMERIC;

/**
 *
 * BoxModel
 *
 */

export type SizeType<Override extends undefined | string> = Override extends string
  ? string
  : number;

export type RadiusType<Override extends undefined | string> = Override extends string
  ? string
  : Radius;

/**
 *
 * Sizing
 *
 */

export type SizingType<Override extends undefined | string> = Override extends string
  ? string
  : number;

/**
 *
 * Layout
 *
 */

export type MediaQueryType<Override extends undefined | string> = Override extends string
  ? string
  : MediaQueryGroup;

/**
 *
 * Utilities
 *
 */

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T extends any[]
  ? {
      [P in keyof T]?: T[P] extends T[number] ? DeepPartial<T[P]> : never;
    }
  : T extends string
  ? T | undefined
  : T | undefined;
