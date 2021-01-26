import React from 'react';
import { ProjectPageProps } from './page.template';
import { SECTION_TYPE } from '../../types/contentful-section-type';
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
import { InfoSection } from '../components/info-section';
import { Message } from '../components/message';
import { ContentfulSection } from '../../types/graphql-types';

export const SectionTemplate: React.FC<ProjectPageProps> = ({ data }) => {
  return (
    <>
      {data.contentfulPage?.sections?.map((section, index) => {
        switch (section?.type?.type) {
          /**
           * Common
           */
          case SECTION_TYPE.BANNER: {
            return (
              <div id={`section-${index}`} key={index}>
                <Banner key={index} {...section} />
              </div>
            );
          }

          case SECTION_TYPE.MESSAGE: {
            return (
              <div id={`section-${index}`} key={index}>
                <Message key={index} {...section} />
              </div>
            );
          }

          /**
           * Home page
           */
          case SECTION_TYPE.TILE_LINKS: {
            return (
              <div id={`section-${index}`} key={index}>
                <TileLinks key={index} section={section as ContentfulSection} />
              </div>
            );
          }
          case SECTION_TYPE.TILE_LINK: {
            return (
              <div id={`section-${index}`} key={index}>
                <TileLink key={index} section={section} />
              </div>
            );
          }
          case SECTION_TYPE.CLINIC_PREVIEW: {
            return (
              <div id={`section-${index}`} key={index}>
                <InfoSection key={index} section={section} />
              </div>
            );
          }
          case SECTION_TYPE.CONTACT_PREVIEW: {
            return (
              <div id={`section-${index}`} key={index}>
                <InfoSection variant={'secondary'} order={'reverse'} key={index} section={section} />
              </div>
            );
          }

          /**
           * Clinic page
           */
          case SECTION_TYPE.CLINIC_MISSION: {
            return (
              <div id={`section-${index}`} key={index}>
                <InfoSection variant={'secondary'} key={index} section={section} />
              </div>
            );
          }

          case SECTION_TYPE.CLINIC_DR_PROFILE: {
            return (
              <div id={`section-${index}`} key={index}>
                <InfoSection key={index} section={section} />
              </div>
            );
          }

          /**
           * Vasectomy page
           */
          case SECTION_TYPE.VASECTOMY_STEPS: {
            return (
              <div id={`section-${index}`} key={index}>
                <VasectomySteps key={index} {...section} />
              </div>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO: {
            return (
              <div id={`section-${index}`} key={index}>
                <InfoSection key={index} section={section} />
              </div>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_BEFORE: {
            return (
              <div id={`section-${index}`} key={index}>
                <VasectomyInfoBefore key={index} {...section} />
              </div>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_COST: {
            return (
              <div id={`section-${index}`} key={index}>
                <VasectomyInfoCost key={index} {...section} />
              </div>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_AFTER: {
            return (
              <div id={`section-${index}`} key={index}>
                <VasectomyInfoAfter key={index} {...section} />
              </div>
            );
          }
          case SECTION_TYPE.VASECTOMY_FORM_LINK: {
            return (
              <div id={`section-${index}`} key={index}>
                <VasectomyFormLink key={index} {...section} />
              </div>
            );
          }

          /**
           * Vasectomy form page
           */
          case SECTION_TYPE.VASECTOMY_FORM_VIDEO: {
            return (
              <div id={`section-${index}`} key={index}>
                <VasectomyFormVideo key={index} {...section} />
              </div>
            );
          }
          case SECTION_TYPE.VASECTOMY_FORM_FORM: {
            return (
              <div id={`section-${index}`} key={index}>
                <VasectomyFormForm key={index} {...section} />
              </div>
            );
          }

          /**
           * Pilot page
           */
          case SECTION_TYPE.PILOT_EXAM_INFO: {
            return (
              <div id={`section-${index}`} key={index}>
                <InfoSection key={index} section={section} />
              </div>
            );
          }
          case SECTION_TYPE.PILOT_EXAM_SERVICE: {
            return (
              <div id={`section-${index}`} key={index}>
                <PilotExamService key={index} {...section} />
              </div>
            );
          }
          case SECTION_TYPE.PILOT_EXAM_DR_PROFILE: {
            return (
              <div id={`section-${index}`} key={index}>
                <InfoSection key={index} section={section} />
              </div>
            );
          }

          /**
           * Contact page
           */
          case SECTION_TYPE.CONTACT_CONTACT: {
            return (
              <div id={`section-${index}`} key={index}>
                <ContactContact key={index} {...section} />
              </div>
            );
          }
          default: {
            return null;
          }
        }
      })}
    </>
  );
};
