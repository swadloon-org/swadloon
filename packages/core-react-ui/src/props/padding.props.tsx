import { AlignItemsProperty, JustifyContentProperty } from 'csstype';

/**
 * [mobile, tablet, desktop]
 */
export type AlignItemsViewportProps =
  | [AlignItemsProperty]
  | [AlignItemsProperty, AlignItemsProperty]
  | [AlignItemsProperty, AlignItemsProperty, AlignItemsProperty];

export type JustifyContentViewportProps =
  | [JustifyContentProperty]
  | [JustifyContentProperty, JustifyContentProperty]
  | [JustifyContentProperty, JustifyContentProperty, JustifyContentProperty];

/**
 * [all]
 * [top & bottom, right & left]
 * [top, right & left, bottom]
 * [top, right, bottom, left]
 */
export type PaddingProps =
  | [PaddingNumber | PaddingString]
  | [PaddingNumber | PaddingString, PaddingNumber | PaddingString]
  | [PaddingNumber | PaddingString, PaddingNumber | PaddingString, PaddingNumber | PaddingString]
  | [
      PaddingNumber | PaddingString,
      PaddingNumber | PaddingString,
      PaddingNumber | PaddingString,
      PaddingNumber | PaddingString
    ];

/**
 * 9 => 9px
 */
type PaddingNumber = number;

/**
 * 9 => 9px
 * '9px' => 9px
 */
type PaddingString = string;
