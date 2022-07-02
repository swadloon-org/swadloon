import { LinkAPI } from './link.api.js';
import { MediaCollectionAPI } from './media-collection.api.js';

export type PortfolioClientAPI = {
  name: string;
  description?: {
    description?: string | null;
    childMdx?: {
      body: string;
    } | null;
  };

  link?: LinkAPI;

  medias?: (MediaCollectionAPI | null | undefined)[] | null;
};
