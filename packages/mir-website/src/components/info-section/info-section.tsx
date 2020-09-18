import { InfoSectionsFragment } from '../../../types/graphql-types';

export type InfoSectionModelQuery = InfoSectionsFragment & {
  align?: 'AlignContentLeft' | 'AlignContentRight';
};
