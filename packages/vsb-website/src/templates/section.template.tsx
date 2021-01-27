import { GoogleMaps } from '@newrade/core-react-ui';
import React from 'react';
import { SECTION_TYPE } from '../../types/contentful-section-type';
import { ContentfulSection } from '../../types/graphql-types';
import { Banner } from '../components/banner';
import { FormVasectomy } from '../components/form-vasectomy';
import { SectionCallout } from '../components/section-callout';
import { SectionContact } from '../components/section-contact';
import { SectionCost } from '../components/section-cost';
import { SectionFaq } from '../components/section-faq';
import { SectionInfo } from '../components/section-info';
import { SectionMessages } from '../components/section-messages';
import { SectionSteps } from '../components/steps-section';
import { TileLink } from '../components/tile-link';
import { SectionTileLinks } from '../components/section-tile-links';
import { ProjectPageProps } from './page.template';

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
              <section id={`section-${index}`} key={index}>
                <Banner key={index} section={section} />
              </section>
            );
          }

          case SECTION_TYPE.MESSAGE: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionMessages key={index} section={section} />
              </section>
            );
          }

          /**
           * Home page
           */
          case SECTION_TYPE.TILE_LINKS: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionTileLinks key={index} section={section as ContentfulSection} />
              </section>
            );
          }
          case SECTION_TYPE.TILE_LINK: {
            return (
              <section id={`section-${index}`} key={index}>
                <TileLink key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.CLINIC_PREVIEW: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section}></SectionInfo>
              </section>
            );
          }
          case SECTION_TYPE.CONTACT_PREVIEW: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionInfo
                  variant={'secondary'}
                  variantType={'children'}
                  order={'reverse'}
                  key={index}
                  section={section}
                >
                  <GoogleMaps
                    script={{
                      id: 'contact-map-script',
                      googleMapsApiKey: 'AIzaSyB41IPC7t1sYwRfrII04lrL94eiCYm8pZw',
                    }}
                    map={{
                      id: 'contact-map',
                      mapContainerStyle: {
                        height: `min(50vh, 600px)`,
                      },
                    }}
                  ></GoogleMaps>
                </SectionInfo>
              </section>
            );
          }

          /**
           * Clinic page
           */
          case SECTION_TYPE.CLINIC_MISSION: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionInfo variant={'secondary'} key={index} section={section} />
              </section>
            );
          }

          case SECTION_TYPE.CLINIC_DR_PROFILE: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </section>
            );
          }

          /**
           * Vasectomy page
           */
          case SECTION_TYPE.VASECTOMY_STEPS: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionSteps key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_BEFORE: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionFaq key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_COST: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionCost key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_AFTER: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionFaq key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.VASECTOMY_FORM_LINK: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionCallout key={index} section={section} />
              </section>
            );
          }

          /**
           * Vasectomy form page
           */
          case SECTION_TYPE.VASECTOMY_FORM_VIDEO: {
            return (
              <section id={`section-${index}`} key={index}>
                <FormVasectomy key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.VASECTOMY_FORM_FORM: {
            return (
              <section id={`section-${index}`} key={index}>
                <FormVasectomy key={index} section={section} />
              </section>
            );
          }

          /**
           * Pilot page
           */
          case SECTION_TYPE.PILOT_EXAM_INFO: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.PILOT_EXAM_DR_PROFILE: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </section>
            );
          }
          case SECTION_TYPE.PILOT_EXAM_SERVICE: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionCost key={index} section={section} />
              </section>
            );
          }

          /**
           * Contact page
           */
          case SECTION_TYPE.CONTACT_CONTACT: {
            return (
              <section id={`section-${index}`} key={index}>
                <SectionContact key={index} section={section} />
              </section>
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
