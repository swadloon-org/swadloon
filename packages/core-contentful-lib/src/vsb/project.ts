import { ContentfulProject } from '../../types/contentful-types';
import { createContentfulProject } from '../utilities/create-project';

export enum PAGE_TYPE {
  HOME,
  CLINIC,
  VASECTOMY_FORM,
  FORM,
  PILOT_EXAM,
  CONTACT,
}

export enum SECTION_TYPE {
  BANNER,
  MESSAGES,
  TILE_LINKS,
  CLINIC_PREVIEW,
  CONTACT_PREVIEW,
  CLINIC_MISSION,
  CLINIC_DR_PROFILE,
  VASECTOMY_STEPS,
  VASECTOMY_INFO,
  VASECTOMY_INFO_BEFORE,
  VASECTOMY_INFO_COST,
  VASECTOMY_INFO_AFTER,
  VASECTOMY_FORM_LINK,
  VASECTOMY_FORM_VIDEO,
  VASECTOMY_FORM_FORM,
  PILOT_EXAM_INFO,
  PILOT_EXAM_SERVICES,
  PILOT_EXAM_DR_PROFILE,
  CONTACT_CONTACT,
}

export const project: ContentfulProject = createContentfulProject({
  name: 'Clinique Dr. Pierre Boucher',
  dir: 'vsb',
  pageTypes: PAGE_TYPE,
  sectionTypes: SECTION_TYPE,
});
