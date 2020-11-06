import { VIEWPORT } from './layout';

/**
 * Content margins for each viewport formats.
 */
export type ContentMargins = {
  [key in keyof typeof VIEWPORT]: number;
};

/**
 * Content max width for larger viewports.
 */
export interface ContentWidths<WidthType = number> {
  desktopMaxWidth: WidthType;
}
