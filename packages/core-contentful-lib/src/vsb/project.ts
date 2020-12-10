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
  BANNER = 'Banner',
  MESSAGES = 'Messages',
  TILE_LINKS = 'TileLinks',
  CLINIC_PREVIEW = 'ClinicPreview',
  CONTACT_PREVIEW = 'ContactPreview',
  CLINIC_MISSION = 'ClinicMission',
  CLINIC_DR_PROFILE = 'ClinicDrProfile',
  VASECTOMY_STEPS = 'VasectomySteps',
  VASECTOMY_INFO = 'VasectomyInfo',
  VASECTOMY_INFO_BEFORE = 'VasectomyInfoBefore',
  VASECTOMY_INFO_COST = 'VasectomyInfoCost',
  VASECTOMY_INFO_AFTER = 'VasectomyInfoAfter',
  VASECTOMY_FORM_LINK = 'VasectomyFormLink',
  VASECTOMY_FORM_VIDEO = 'VasectomyFormVideo',
  VASECTOMY_FORM_FORM = 'VasectomyFormForm',
  PILOT_EXAM_INFO = 'PilotExamInfo',
  PILOT_EXAM_SERVICES = 'PilotExamServices',
  PILOT_EXAM_DR_PROFILE = 'PilotExamDrProfile',
  CONTACT_CONTACT = 'ContactContact',
}

export const project: ContentfulProject = createContentfulProject({
  name: 'Clinique Dr. Pierre Boucher',
  dir: 'vsb',
  pageTypes: PAGE_TYPE,
  sectionTypes: SECTION_TYPE,
});
