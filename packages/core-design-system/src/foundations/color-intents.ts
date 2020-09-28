import { Color } from '../primitives/color';

/**
 * Contextual use of certain colors (text, action, state, etc).
 */
export interface ColorIntents {
  /**
   * TODO
   */
  accessibilityColor?: Color;

  primary: Color;
  primaryReversed: Color;

  secondary: Color;
  secondaryReversed: Color;

  primaryText: Color;
  primaryTextReversed: Color;

  secondaryText: Color;
  secondaryTextReversed: Color;

  tertiaryText: Color;
  tertiaryTextReversed: Color;

  successText: Color;
  successAction: Color;
  successBackground: Color;

  warningText: Color;
  warningAction: Color;
  warningBackground: Color;

  dangerText: Color;
  dangerAction: Color;
  dangerBackground: Color;

  background0: Color;
  background1: Color;
  background2: Color;
}
