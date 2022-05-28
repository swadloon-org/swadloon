import { SIZE } from '@newrade/core-design-system';
import { Property } from 'csstype';


/**
 * 9 => 9px
 */
type PaddingNumber = number;

/**
 * 9 => 9px
 * '9px' => 9px
 */
type PaddingString = string;

type Padding = PaddingNumber | PaddingString;

/**
 * [mobile, tablet, desktop]
 */
export type AlignItemsViewportProps =
  | [Property.AlignItems]
  | [Property.AlignItems, Property.AlignItems]
  | [Property.AlignItems, Property.AlignItems, Property.AlignItems];

export type JustifyContentViewportProps =
  | [Property.JustifyContent]
  | [Property.JustifyContent, Property.JustifyContent]
  | [Property.JustifyContent, Property.JustifyContent, Property.JustifyContent];

/**
 * [all]
 * [top & bottom, right & left]
 * [top, right & left, bottom]
 * [top, right, bottom, left]
 */
export type PaddingProps =
  | [Padding]
  | [Padding, Padding]
  | [Padding, Padding, Padding]
  | [Padding, Padding, Padding, Padding];

/**
 * 'all'
 * 'top & bottom, right & left'
 * 'top, right & left, bottom'
 * 'top, right, bottom, left'
 */
export type PaddingStringProps =
  | `${SIZE}`
  | `${SIZE} ${SIZE}`
  | `${SIZE} ${SIZE} ${SIZE}`
  | `${SIZE} ${SIZE} ${SIZE} ${SIZE}`;
