import { SectionFragmentFragment } from '../../../types/graphql-types';

export type InfoSectionModelQuery = SectionFragmentFragment & {
  align?: 'AlignContentLeft' | 'AlignContentRight';
};
