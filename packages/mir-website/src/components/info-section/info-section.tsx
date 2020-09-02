import { GraphCms_Asset, GraphCms_InfoSection, GraphCms_InfoTile, Maybe } from '../../../types/graphql-types';

export type InfoSectionModelQuery = Pick<
  GraphCms_InfoSection,
  'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'showTabs' | 'actionText' | 'imagePosition'
> & {
  infoTiles: Array<Pick<GraphCms_InfoTile, 'illustration' | 'title' | 'text'>>;
  childs: Array<
    Pick<GraphCms_InfoSection, 'showTabs' | 'title' | 'titleHighlight' | 'titleTab' | 'type' | 'text' | 'actionText'>
  >;
  image?: Maybe<Pick<GraphCms_Asset, 'url'>>;
  align?: 'AlignContentLeft' | 'AlignContentRight';
};
