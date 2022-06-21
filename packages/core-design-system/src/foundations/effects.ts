import { Color } from '../primitives/color.js';
import { ColorType, DeepPartial, NumberType } from '../types.js';

/**
 * Representation of a box shadow.
 */
export type BoxShadow = {
  /**
   * Blur value in px.
   */
  blur?: number;
  /**
   * Type of shadow
   * @default 'normal'
   */
  type?: 'normal' | 'inset';
  /**
   * Spread value in px.
   */
  spread?: number;
  /**
   * TODO
   */
  offsetX?: number;
  /**
   * TODO
   */
  offsetY?: number;
  /**
   * The box shadow's color.
   */
  color?: Color;
};

/**
 * Representation of a text shadow.
 */
export type TextShadow = Omit<BoxShadow, 'spread'>;

/**
 * Levels of shadows in the system.
 */
export type BoxShadows<Override extends undefined | string = undefined> = {
  light: Override extends string ? string : BoxShadow | BoxShadow[];
  medium: Override extends string ? string : BoxShadow | BoxShadow[];
  heavy: Override extends string ? string : BoxShadow | BoxShadow[];
};

export type TextShadows<Override extends undefined | string = undefined> = {
  light: Override extends string ? string : TextShadow;
  medium: Override extends string ? string : TextShadow;
  heavy: Override extends string ? string : TextShadow;
};

export type OutlineShadows<Override extends undefined | string = undefined> = {
  focus: Override extends string ? string : BoxShadow | BoxShadow[];
};

/**
 * Representation of a background, either a plain background with a color
 * or a transparent background with a blurring effect.
 */
export type OverlayBackground<Override extends undefined | string = undefined> = {
  color: ColorType<Override>;
  blur?: NumberType<Override>;
};

/**
 * Levels of overlays in the system.
 */
export type Overlays = {
  light: OverlayBackground;
  medium: OverlayBackground;
  heavy: OverlayBackground;
} & { [key: string]: string };

/**
 * Shadows, elevation, blurs and other visual effects.
 */
export type Effects<Override extends undefined | string = undefined> = {
  boxShadows: BoxShadows<Override>;
  innerBoxShadows: BoxShadows<Override>;
  textShadows: TextShadows<Override>;
  outlineShadows: OutlineShadows<Override>;
  // TODO
  // overlays: Overlays;

  /**
   * Reference to variables (string) to be used in place of defined values when a theme is created.
   * This should not be used for default themes since they are used to generate the base contracts.
   */
  vars?: Omit<DeepPartial<Effects<string>>, 'vars'>;
};

/**
 * Effects object without the `vars` property which is used only
 * in application-defined theme configuration
 */
export type DefaultEffects = Omit<Effects, 'vars'>;
