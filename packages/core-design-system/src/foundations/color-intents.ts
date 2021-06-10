import { ColorType } from '../types';

/**
 * Contextual use of certain colors (text, action, state, etc).
 */
export interface ColorIntents<Override extends undefined | string = undefined> {
  /**
   * Used for outlines when elements are focused
   */
  accessibilityColor: ColorType<Override>;

  current: string;
  transparent: ColorType<Override>;

  primary: ColorType<Override>;
  primaryReversed: ColorType<Override>;

  secondary: ColorType<Override>;
  secondaryReversed: ColorType<Override>;

  primaryText: ColorType<Override>;
  primaryTextReversed: ColorType<Override>;

  secondaryText: ColorType<Override>;
  secondaryTextReversed: ColorType<Override>;

  tertiaryText: ColorType<Override>;
  tertiaryTextReversed: ColorType<Override>;

  disabledText: ColorType<Override>;
  disabledTextReversed: ColorType<Override>;

  infoText: ColorType<Override>;
  infoAction: ColorType<Override>;
  infoBackground: ColorType<Override>;

  successText: ColorType<Override>;
  successAction: ColorType<Override>;
  successBackground: ColorType<Override>;

  warningText: ColorType<Override>;
  warningAction: ColorType<Override>;
  warningBackground: ColorType<Override>;

  dangerText: ColorType<Override>;
  dangerAction: ColorType<Override>;
  dangerBackground: ColorType<Override>;

  background0: ColorType<Override>;
  background1: ColorType<Override>;
  background2: ColorType<Override>;
  backgroundDisabled: ColorType<Override>;
}
