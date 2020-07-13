import { SizingScale } from './modular-scale';
import { TypographySystem } from './typography';

/**
 * Base class to represent a design system.
 */
export interface DesignSystem {
  /**
   * The theme name.
   */
  name: string;
  /**
   * The theme variant, e.g. 'light', 'dark'.
   */
  variant: string;
  /**
   * Sizing scale defining scale steps from X1 to X10.
   *
   * The scale defines sizes for text styles (height), components height
   * and spacing in the system.
   */
  sizingScale: SizingScale;
  /**
   * Defines typography for sans-serif, serif and monospaced fonts.
   *
   * Each typographic style (e.g. H1, H2, H3...) is sized to match one of the size in
   * the sizingScale.
   */
  typography: TypographySystem;
}
