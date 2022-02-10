import { ColorType, DeepPartial } from '../types';

/**
 * Contextual use of certain colors (text, action, state, etc).
 */
export type ColorIntents<Override extends undefined | string = undefined> = {
  /**
   * Used for outlines when elements are focused
   */
  accessibilityColor: ColorType<Override>;

  /**
   *
   * Color scheme
   *
   */
  isLight: `1` | `0`;

  /**
   *
   * Other useful colors
   *
   */

  current: string;
  transparent: ColorType<Override>;

  /**
   *
   * Primary and secondary action colors
   *
   */

  primary: ColorType<Override>;
  secondary: ColorType<Override>;

  /**
   *
   * Text
   *
   */

  primaryText: ColorType<Override>;
  secondaryText: ColorType<Override>;
  tertiaryText: ColorType<Override>;
  disabledText: ColorType<Override>;

  /**
   *
   * Utility
   *
   */

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

  /**
   *
   * Backgrounds
   *
   */

  /** @deprecated use elevation levels instead */
  background0: ColorType<Override>;
  /** @deprecated use elevation levels instead */
  background1: ColorType<Override>;
  /** @deprecated use elevation levels instead */
  background2: ColorType<Override>;
  /** @deprecated use elevation levels instead */
  backgroundDisabled: ColorType<Override>;

  /**
   *
   * Elevation Levels
   *
   * Note: Grey variants are usually useful on light themes, dark theme will probably
   * have the same values for elevations and their grey counterparts
   *
   */

  elevation0: ColorType<Override>;
  elevation1: ColorType<Override>;
  elevation2: ColorType<Override>;
  elevation3: ColorType<Override>;
  elevation4: ColorType<Override>;
  elevation0Grey: ColorType<Override>;
  elevation1Grey: ColorType<Override>;
  elevation2Grey: ColorType<Override>;
  elevation3Grey: ColorType<Override>;
  elevation4Grey: ColorType<Override>;

  /**
   *
   * Data Viz
   *
   */

  // dataCombo1:

  /**
   * Reference to variables (string) to be used in place of defined values when a theme is created.
   * This should not be used for default themes since they are used to generate the base contracts.
   */
  vars?: Omit<DeepPartial<ColorIntents<string>>, 'vars'>;
};

/**
 * ColorIntents object without the `vars` property which is used only
 * in application-defined theme configuration
 */
export type DefaultColorIntents = Omit<ColorIntents, 'vars'>;
