import { SizeType } from '../types';
import { VIEWPORT } from './layout';

/**
 * Content margins for each viewport formats.
 */
export type ContentMargins<Override extends undefined | string = undefined> = {
  [key in VIEWPORT]: SizeType<Override>;
};

/**
 * Content max width for larger viewports.
 */
export interface ContentWidths<Override extends undefined | string = undefined> {
  desktopMaxWidth: SizeType<Override>;
  desktopBlogMaxWidth: SizeType<Override>;
  desktopDocsMaxWidth: SizeType<Override>;
}
