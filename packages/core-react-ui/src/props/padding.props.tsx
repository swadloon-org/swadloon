import { Property } from 'csstype';

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
