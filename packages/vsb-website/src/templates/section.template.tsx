import React from 'react';
import { ProjectPageProps } from './page.template';
import { SECTION_TYPE } from '../../types/contentful/section-type';
import { Banner } from '../components/banner';
import { TileLinks } from '../components/tile-links';
import { TileLink } from '../components/tile-link';
import { ContactPreview } from '../components/contact/contact-preview';
import { ClinicMission } from '../components/clinic/clinic-mission';
import { ClinicDrProfile } from '../components/clinic/clinic-dr-profile';
import { VasectomySteps } from '../components/vasectomy/vasectomy-steps';
import { VasectomyInfo } from '../components/vasectomy/vasectomy-info';
import { VasectomyInfoBefore } from '../components/vasectomy/vasectomy-info-before';
import { VasectomyInfoCost } from '../components/vasectomy/vasectomy-info-cost';
import { VasectomyInfoAfter } from '../components/vasectomy/vasectomy-info-after';
import { VasectomyFormLink } from '../components/vasectomy/vasectomy-form-link';
import { VasectomyFormVideo } from '../components/vasectomy/vasectomy-form-video';
import { VasectomyFormForm } from '../components/vasectomy/vasectomy-form-form';
import { PilotExamInfo } from '../components/pilot/pilot-exam-info';
import { PilotExamService } from '../components/pilot/pilot-exam-service';
import { PilotExamDrProfile } from '../components/pilot/pilot-exam-dr-profile';
import { ContactContact } from '../components/contact/contact-contact';
import { ClinicPreview } from '../components/clinic/clinic-preview';

export const SectionTemplate: React.FC<ProjectPageProps> = ({ data }) => {
  return (
    <>
      {data.contentfulPage?.sections?.map((section, index) => {
        switch (section?.type?.type) {
          case SECTION_TYPE.BANNER: {
            return <Banner key={index} {...section} />;
          }
          case SECTION_TYPE.MESSAGE: {
            return <Banner key={index} {...section} />;
          }
          case SECTION_TYPE.TILE_LINKS: {
            return <TileLinks key={index} {...section} />;
          }
          case SECTION_TYPE.TILE_LINK: {
            return <TileLink key={index} {...section} />;
          }
          case SECTION_TYPE.CLINIC_PREVIEW: {
            return <ClinicPreview key={index} {...section} />;
          }
          case SECTION_TYPE.CONTACT_PREVIEW: {
            return <ContactPreview key={index} {...section} />;
          }
          case SECTION_TYPE.CLINIC_MISSION: {
            return <ClinicMission key={index} {...section} />;
          }
          case SECTION_TYPE.CLINIC_DR_PROFILE: {
            return <ClinicDrProfile key={index} {...section} />;
          }
          case SECTION_TYPE.VASECTOMY_STEPS: {
            return <VasectomySteps key={index} {...section} />;
          }
          case SECTION_TYPE.VASECTOMY_INFO: {
            return <VasectomyInfo key={index} {...section} />;
          }
          case SECTION_TYPE.VASECTOMY_INFO_BEFORE: {
            return <VasectomyInfoBefore key={index} {...section} />;
          }
          case SECTION_TYPE.VASECTOMY_INFO_COST: {
            return <VasectomyInfoCost key={index} {...section} />;
          }
          case SECTION_TYPE.VASECTOMY_INFO_AFTER: {
            return <VasectomyInfoAfter key={index} {...section} />;
          }
          case SECTION_TYPE.VASECTOMY_FORM_LINK: {
            return <VasectomyFormLink key={index} {...section} />;
          }
          case SECTION_TYPE.VASECTOMY_FORM_VIDEO: {
            return <VasectomyFormVideo key={index} {...section} />;
          }
          case SECTION_TYPE.VASECTOMY_FORM_FORM: {
            return <VasectomyFormForm key={index} {...section} />;
          }
          case SECTION_TYPE.PILOT_EXAM_INFO: {
            return <PilotExamInfo key={index} {...section} />;
          }
          case SECTION_TYPE.PILOT_EXAM_SERVICE: {
            return <PilotExamService key={index} {...section} />;
          }
          case SECTION_TYPE.PILOT_EXAM_DR_PROFILE: {
            return <PilotExamDrProfile key={index} {...section} />;
          }
          case SECTION_TYPE.CONTACT_CONTACT: {
            return <ContactContact key={index} {...section} />;
          }

          default: {
            return null;
          }
        }
      })}
    </>
  );
};
