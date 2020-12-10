import { Color } from '../primitives/color';

/**
 * Contextual use of certain colors (text, action, state, etc).
 */
export interface ColorIntents<ColorType = Color> {
  /**
   * TODO
   */
  accessibilityColor: ColorType;

  current: string;
  transparent: ColorType;

  primary: ColorType;
  primaryReversed: ColorType;

  secondary: ColorType;
  secondaryReversed: ColorType;

  primaryText: ColorType;
  primaryTextReversed: ColorType;

  secondaryText: ColorType;
  secondaryTextReversed: ColorType;

  tertiaryText: ColorType;
  tertiaryTextReversed: ColorType;

  disabledText: ColorType;
  disabledTextReversed: ColorType;

  successText: ColorType;
  successAction: ColorType;
  successBackground: ColorType;

  warningText: ColorType;
  warningAction: ColorType;
  warningBackground: ColorType;

  dangerText: ColorType;
  dangerAction: ColorType;
  dangerBackground: ColorType;

  background0: ColorType;
  background1: ColorType;
  background2: ColorType;
  backgroundDisabled: ColorType;
}
