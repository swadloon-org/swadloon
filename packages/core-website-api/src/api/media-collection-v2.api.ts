import { MediaAPI } from './media.api';

export type MediaCollectionV2API = {
  name?: string;
  medias?: (MediaAPI | null | undefined)[] | null;
};
