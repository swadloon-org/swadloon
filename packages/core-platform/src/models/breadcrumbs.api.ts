import type { PartialOrNull } from '@newrade/core-types';

import { LinkAPI } from './link.api.js';

export type BreadcrumbsAPI = PartialOrNull<{
  links: LinkAPI[];
}>;
