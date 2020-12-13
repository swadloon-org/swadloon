import { MediaQueryGroup } from './foundations/media-queries';
import { TextDecoration, TEXT_TRANSFORM } from './foundations/text';
import { Color } from './primitives/color';

/**
 * The Override default generic
 */
// Override extends undefined | string = undefined

/**
 * General types
 */
export type NumberType<Override extends undefined | string> = Override extends string ? string : number;
export type PercentType<Override extends undefined | string> = Override extends string ? string : number;

/**
 * Color
 */
export type ColorType<Override extends undefined | string> = Override extends string ? string : Color;

/**
 * Effects
 */

/**
 * Font and text types
 */
export type FontWeightType<Override extends undefined | string> = Override extends string ? string : number;
export type LetterSpacingType<Override extends undefined | string> = Override extends string ? string : number;
export type TextTransformType<Override extends undefined | string> = Override extends string ? string : TEXT_TRANSFORM;
export type TextDecorationType<Override extends undefined | string> = Override extends string ? string : TextDecoration;

/**
 * BoxModel
 */
export type SizeType<Override extends undefined | string> = Override extends string ? string : number;
export type RadiusType<Override extends undefined | string> = Override extends string ? string : number;

/**
 * Sizing
 */
export type SizingType<Override extends undefined | string> = Override extends string ? string : number;

/**
 * Layout
 */
export type MediaQueryType<Override extends undefined | string> = Override extends string ? string : MediaQueryGroup;
