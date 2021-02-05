import { SectionFragment } from '../../types/graphql-types';

export type SectionProps = {
  /**
   * Contentful section
   */
  section?: SectionFragment;
  subSections?: (SectionFragment | null)[] | null;
};
