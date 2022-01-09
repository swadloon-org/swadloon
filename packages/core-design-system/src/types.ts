import { MediaQueryGroup } from './foundations/media-queries';
import { TEXT_TRANSFORM, TextDecoration } from './foundations/text';
import { Color } from './primitives/color';
import { Radius } from './primitives/radius';

/**
 * The Override default generic
 */
// Override extends undefined | string = undefined

/**
 * General types
 */
export type NumberType<Override extends undefined | string> = Override extends string
  ? string
  : number;
export type PercentType<Override extends undefined | string> = Override extends string
  ? string
  : number;

/**
 * Color
 */
export type ColorType<Override extends undefined | string> = Override extends string
  ? string
  : Color;

/**
 * Effects
 */

/**
 * Font and text types
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

/**
 * BoxModel
 */
export type SizeType<Override extends undefined | string> = Override extends string
  ? string
  : number;
export type RadiusType<Override extends undefined | string> = Override extends string
  ? string
  : Radius;

/**
 * Sizing
 */
export type SizingType<Override extends undefined | string> = Override extends string
  ? string
  : number;

/**
 * Layout
 */
export type MediaQueryType<Override extends undefined | string> = Override extends string
  ? string
  : MediaQueryGroup;
