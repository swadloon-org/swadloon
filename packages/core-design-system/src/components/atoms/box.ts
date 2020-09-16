import { Color } from 'csstype';
import { SIZING } from '../..';
import { CSSBorder } from '../../css/border';
import { Value } from '../../utilities/value';

export type BorderStyle = {
  borderColor?: Color;
  borderStyle?: CSSBorder;
  borderWidth?: number | string;
  borderRadius?: CSSBorder;
};

export type BoxStyle = {
  width?: Value;
  /**
   * number === px (22 => 22px => 11rem)
   * string === css (var(--sizing-x2), '22px') height: multiplySize(theme.si...x2, 2)
   */
  height?: number | string;
  padding?: {
    default: BorderStyle;
    top: BorderStyle;
    right: BorderStyle;
    bottom: BorderStyle;
    left: BorderStyle;
  };
  border?: {
    default: BorderStyle;
    top: BorderStyle;
    right: BorderStyle;
    bottom: BorderStyle;
    left: BorderStyle;
  };
  outline?: {
    default: BorderStyle;
    top: BorderStyle;
    right: BorderStyle;
    bottom: BorderStyle;
    left: BorderStyle;
  };
};
