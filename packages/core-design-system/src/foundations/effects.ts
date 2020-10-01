import { Color } from '../primitives/color';

/**
 * Representation of a box shadow.
 */
export type BoxShadow = {
  /**
   * Blur value in px.
   */
  blur?: number;
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
 * Levels of shadows in the system.
 */
export type Shadows<T = BoxShadow> = {
  light: T;
  medium: T;
  heavy: T;
} & { [key: string]: T };

/**
 * Representation of a background, either a plain background with a color
 * or a transparent background with a blurring effect.
 */
export type OverlayBackground = {
  color: Color;
  blur?: number;
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
export interface Effects<ShadowType = BoxShadow> {
  shadows: Shadows<ShadowType>;
  // overlays: Overlays;
}
