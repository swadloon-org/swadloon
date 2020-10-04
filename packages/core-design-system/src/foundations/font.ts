import { FontMetrics } from 'capsize';

export interface Font {
  /**
   * Name of the font or typeface
   * @example 'Helvetica'
   */
  name: string;
  vendor?: string;
  link?: string;
  /**
   * Font-specific metric for capsize.
   * @see https://seek-oss.github.io/capsize/
   */
  fontMetrics: FontMetrics;
}
