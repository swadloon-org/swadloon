import { Color } from 'csstype';

/**
 * Representation of a box shadow.
 */
export type BoxShadow = {
  /**
   * Blur value in px.
   */
  blur: number;
  /**
   * Spread value in px.
   */
  spread: number;
  /**
   * TODO
   */
  offsetX: number;
  /**
   * TODO
   */
  offsetY: number;
  /**
   * The box shadow's color.
   */
  color: Color;
  /**
   * The box-shadow property
   */
  css: string;
};

/**
 * Levels of shadows in the system.
 */
export type Shadows = {
  light: BoxShadow;
  medium: BoxShadow;
  heavy: BoxShadow;
} & { [key: string]: BoxShadow };

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
export interface Effects {
  shadows: Shadows;
  // overlays: Overlays;
}
