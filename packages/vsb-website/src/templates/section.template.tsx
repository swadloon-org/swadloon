import React from 'react';
import { ProjectPageProps } from './page.template';
import { SECTION_TYPE } from '../../types/contentful/section-type';

export const SectionTemplate: React.FC<ProjectPageProps> = ({ data }) => {
  return (
    <>
      {data.contentfulPage?.sections?.map((section) => {
        switch (section?.type?.type) {
          case SECTION_TYPE.BANNER: {
            return null;
          }
          case SECTION_TYPE.MESSAGE: {
            return null;
          }
          case SECTION_TYPE.TILE_LINKS: {
            return null;
          }
          case SECTION_TYPE.TILE_LINK: {
            return null;
          }
          case SECTION_TYPE.CLINIC_PREVIEW: {
            return null;
          }
          case SECTION_TYPE.CONTACT_PREVIEW: {
            return null;
          }
          case SECTION_TYPE.CLINIC_MISSION: {
            return null;
          }
          case SECTION_TYPE.CLINIC_DR_PROFILE: {
            return null;
          }
          case SECTION_TYPE.VASECTOMY_STEPS: {
            return null;
          }
          case SECTION_TYPE.VASECTOMY_INFO: {
            return null;
          }
          case SECTION_TYPE.VASECTOMY_INFO_BEFORE: {
            return null;
          }
          case SECTION_TYPE.VASECTOMY_INFO_COST: {
            return null;
          }
          case SECTION_TYPE.VASECTOMY_INFO_AFTER: {
            return null;
          }
          case SECTION_TYPE.VASECTOMY_FORM_LINK: {
            return null;
          }
          case SECTION_TYPE.VASECTOMY_FORM_VIDEO: {
            return null;
          }
          case SECTION_TYPE.VASECTOMY_FORM_FORM: {
            return null;
          }
          case SECTION_TYPE.PILOT_EXAM_INFO: {
            return null;
          }
          case SECTION_TYPE.PILOT_EXAM_SERVICE: {
            return null;
          }
          case SECTION_TYPE.PILOT_EXAM_DR_PROFILE: {
            return null;
          }
          case SECTION_TYPE.CONTACT_CONTACT: {
            return null;
          }

          default: {
            return null;
          }
        }
      })}
    </>
  );
};
