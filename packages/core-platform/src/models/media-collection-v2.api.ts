import { MediaAPI } from './media.api.js';

export type MediaCollectionV2API = {
  name?: string;
  medias?: (MediaAPI | null | undefined)[] | null;
};
