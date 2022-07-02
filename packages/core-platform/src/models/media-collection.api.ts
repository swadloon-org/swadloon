import { CarouselDirection } from '@newrade/core-design-system';

import { MediaAPI } from './media.api.js';

export type MediaCollectionAPI = {
  name?: string;
  carrousel?: CarouselDirection | null;
  medias?: (MediaAPI | null | undefined)[] | null;
};
