import { SizeType } from '../types.js';

import { VIEWPORT } from './layout.js';

/**
 * Content margins for each viewport formats.
 */
export type ContentMargins<Override extends undefined | string = undefined> = {
  [key in VIEWPORT]: SizeType<Override>;
};

/**
 * Content max width for larger viewports.
 */
export type ContentWidths<Override extends undefined | string = undefined> = {
  desktopMaxWidth: SizeType<Override>;
  desktopBlogMaxWidth: SizeType<Override>;
  desktopDocsMaxWidth: SizeType<Override>;
};
