import { Color } from '../primitives/color';

/**
 * Contextual use of certain colors (text, action, state, etc).
 */
export interface ColorIntents<T = Color> {
  /**
   * TODO
   */
  accessibilityColor?: T;

  primary: T;
  primaryReversed: T;

  secondary: T;
  secondaryReversed: T;

  primaryText: T;
  primaryTextReversed: T;

  secondaryText: T;
  secondaryTextReversed: T;

  tertiaryText: T;
  tertiaryTextReversed: T;

  successText: T;
  successAction: T;
  successBackground: T;

  warningText: T;
  warningAction: T;
  warningBackground: T;

  dangerText: T;
  dangerAction: T;
  dangerBackground: T;

  background0: T;
  background1: T;
  background2: T;
}
