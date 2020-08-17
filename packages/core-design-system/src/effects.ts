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
   * The box shadow's color.
   */
  color: Color;
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
export type Background = {
  color: Color;
  blur?: number;
};

/**
 * Levels of overlays in the system.
 */
export type Overlays = {
  light: Background;
  medium: Background;
  heavy: Background;
} & { [key: string]: string };

/**
 * Shadows, elevation, blurs and other visual effects.
 */
export interface Effects {
  shadows: Shadows;
  overlays: Overlays;
}
