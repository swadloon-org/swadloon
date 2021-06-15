import { LinkAPI } from './link.api';
import { MediaCollectionAPI } from './media-collection.api';

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
