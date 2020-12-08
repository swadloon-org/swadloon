import { Color } from '../primitives/color';

/**
 * Representation of a box shadow.
 */
export type BoxShadow<ColorType = Color> = {
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
  color?: ColorType;
};

/**
 * Levels of shadows in the system.
 */
export type Shadows<ShadowType = BoxShadow, ColorType = Color> = {
  light: ShadowType extends BoxShadow ? BoxShadow<ColorType> : ShadowType;
  medium: ShadowType extends BoxShadow ? BoxShadow<ColorType> : ShadowType;
  heavy: ShadowType extends BoxShadow ? BoxShadow<ColorType> : ShadowType;
} & { [key: string]: ShadowType extends BoxShadow ? BoxShadow<ColorType> : ShadowType };

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
export interface Effects<ShadowType = BoxShadow, ColorType = Color> {
  shadows: Shadows<ShadowType, ColorType>;
  innerShadows: Shadows<ShadowType, ColorType>;
  // TOOD
  // overlays: Overlays;
}
