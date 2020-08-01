import { prefab } from '@diez/engine';

import { SizingScale } from './modular-scale';
import { Colors } from './colors';

export type THEME_NAME = 'light' | 'dark';

export interface DesignSystemThemeProps {
  colors: Colors;
}

/**
 * Representation of a color theme.
 */
export class DesignSystemTheme extends prefab<DesignSystemThemeProps>() {
  defaults = {
    colors: new Colors(),
  };
  constructor(overrides: Partial<DesignSystemThemeProps> = {}) {
    super(overrides);
  }
}

export interface DesignSystemThemesProps {
  light: DesignSystemTheme;
  dark: DesignSystemTheme;
}

/**
 * Available themes for a design system.
 */
export class DesignSystemThemes extends prefab<DesignSystemThemesProps>() {
  defaults = {
    light: new DesignSystemTheme(),
    dark: new DesignSystemTheme(),
  };
  constructor(overrides: Partial<DesignSystemThemesProps> = {}) {
    super(overrides);
  }
}

export interface DesignSystemProps {
  /**
   * Sizing scale defining scale steps from X1 to X10.
   *
   * The scale defines sizes for text styles (height), components height
   * and spacing in the system.
   */
  // sizingScale: SizingScale;
  /**
   * Defines typography for sans-serif, serif and monospaced fonts.
   *
   * Each typographic style (e.g. H1, H2, H3...) is sized to match one of the size in
   * the sizingScale.
   */
  // typography: TypographySystem;

  /**
   * Lists every theme available in the design system.
   */
  themes: DesignSystemThemes;
}

/**
 * Complete representation of a design system.
 */
export class DesignSystem extends prefab<DesignSystemProps>() {
  defaults = {
    name: 'Design System Name',
    themes: new DesignSystemThemes(),
  };
  constructor(overrides: Partial<DesignSystemProps> = {}) {
    super(overrides);
  }
}

/**
 * Diez Design Language interface so that all diez packages conform to the
 * same export format.
 */
export interface DiezDesignLanguage {
  /**
   * The design system's name.
   */
  name: string;
  /**
   * The design system prefab object.
   */
  ds: DesignSystem;
}
