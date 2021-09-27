import { PartialOrNull } from '../utilities';
import { LinkAPI } from './link.api';

export type BreadcrumbsAPI = PartialOrNull<{
  links: LinkAPI[];
}>;
