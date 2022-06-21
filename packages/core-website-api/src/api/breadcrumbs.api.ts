import { PartialOrNull } from '../utilities.js';

import { LinkAPI } from './link.api.js';

export type BreadcrumbsAPI = PartialOrNull<{
  links: LinkAPI[];
}>;
