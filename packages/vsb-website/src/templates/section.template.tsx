import { BlockMarkdown, Section } from '@newrade/core-gatsby-ui/src';
import { Image, Switcher, useTreatTheme } from '@newrade/core-react-ui';
import { FluidObject } from 'gatsby-image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { SECTION_TYPE } from '../../types/contentful-section-type';
import { ContentfulSection } from '../../types/graphql-types';
import { FormVasectomy } from '../components/form-vasectomy';
import { GoogleMapVSB } from '../components/google-map';
import { SectionBanner } from '../components/section-banner';
import { SectionCallout } from '../components/section-callout';
import { SectionContact } from '../components/section-contact';
import { SectionCost } from '../components/section-cost';
import { SectionFaq } from '../components/section-faq';
import { SectionInfo } from '../components/section-info';
import { SectionMessages } from '../components/section-messages';
import { SectionSteps } from '../components/section-steps';
import { SectionTileLinks } from '../components/section-tile-links';
import { ProjectPageProps } from './page.template';

export const SectionTemplate: React.FC<ProjectPageProps> = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const { cssTheme } = useTreatTheme();

  return (
    <>
      {data.contentfulPage?.sections?.map((section, index) => {
        switch (section?.type?.type) {
          /**
           * Common
           */
          case SECTION_TYPE.BANNER: {
            return (
              <Section id={`section-${index}`} key={index} variantLayout={'banner'}>
                <SectionBanner key={index} section={section} />
              </Section>
            );
          }

          case SECTION_TYPE.MESSAGE: {
            return (
              <Section id={`section-${index}`} key={index}>
                <SectionMessages key={index} section={section} />
              </Section>
            );
          }

          /**
           * Home page
           */
          case SECTION_TYPE.TILE_LINKS: {
            return (
              <Section id={`section-${index}`} key={index} variantLayout={'banner'}>
                <SectionTileLinks key={index} section={section as ContentfulSection} />
              </Section>
            );
          }
          case SECTION_TYPE.CLINIC_PREVIEW: {
            return (
              <Section id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section}></SectionInfo>
              </Section>
            );
          }
          case SECTION_TYPE.CONTACT_PREVIEW: {
            return (
              <Section id={`section-${index}`} key={index} variant={'secondary'} ref={ref}>
                <SectionInfo variantType={'children'} order={'reverse'} key={index} section={section}>
                  <GoogleMapVSB inView={inView} />
                </SectionInfo>
              </Section>
            );
          }

          /**
           * Clinic page
           */
          case SECTION_TYPE.CLINIC_MISSION: {
            return (
              <Section id={`section-${index}`} key={index} variant={'secondary'}>
                <SectionInfo key={index} section={section} />
              </Section>
            );
          }

          case SECTION_TYPE.CLINIC_DR_PROFILE: {
            return (
              <Section id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </Section>
            );
          }

          /**
           * Vasectomy page
           */
          case SECTION_TYPE.VASECTOMY_STEPS: {
            return (
              <Section id={`section-${index}`} key={index}>
                <SectionSteps key={index} section={section} />
              </Section>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO: {
            return (
              <Section id={`section-${index}`} key={index} variant={'secondary'}>
                {section.text?.childMdx?.body ? (
                  <Switcher gap={[cssTheme.sizing.var.x6]}>
                    <BlockMarkdown key={section.id}>{section.text?.childMdx?.body}</BlockMarkdown>
                    {section.medias?.medias?.[0]?.mobileFluidTallImage?.childImageSharp?.fluid ? (
                      <Image
                        image={{
                          Tag: 'div',
                          fluid: section.medias?.medias?.[0]?.mobileFluidTallImage?.childImageSharp
                            ?.fluid as FluidObject,
                        }}
                      ></Image>
                    ) : null}
                  </Switcher>
                ) : section.subSections?.length ? (
                  <Switcher gap={[cssTheme.sizing.var.x6]}>
                    {section.subSections?.map((subSection) => {
                      return subSection ? (
                        <BlockMarkdown key={subSection.id}>{subSection.text?.childMdx?.body}</BlockMarkdown>
                      ) : null;
                    })}
                  </Switcher>
                ) : null}
              </Section>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_BEFORE: {
            return (
              <Section id={`section-${index}`} key={index}>
                <SectionFaq key={index} section={section} />
                {/* BlockMarkdown */}
              </Section>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_COST: {
            return (
              <Section id={`section-${index}`} key={index} variant={'secondary'}>
                <SectionCost key={index} section={section} />
              </Section>
            );
          }
          case SECTION_TYPE.VASECTOMY_INFO_AFTER: {
            return (
              <Section id={`section-${index}`} key={index}>
                <SectionFaq key={index} section={section} />
              </Section>
            );
          }
          case SECTION_TYPE.VASECTOMY_FORM_LINK: {
            return (
              <Section id={`section-${index}`} key={index} variantLayout={'banner'}>
                <SectionCallout key={index} section={section} />
              </Section>
            );
          }

          /**
           * Vasectomy form page
           */
          case SECTION_TYPE.VASECTOMY_FORM_VIDEO: {
            return (
              <Section id={`section-${index}`} key={index}>
                <FormVasectomy key={index} section={section} />
              </Section>
            );
          }
          case SECTION_TYPE.VASECTOMY_FORM_FORM: {
            return (
              <Section id={`section-${index}`} key={index}>
                <FormVasectomy key={index} section={section} />
              </Section>
            );
          }

          /**
           * Pilot page
           */
          case SECTION_TYPE.PILOT_EXAM_INFO: {
            return (
              <Section id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </Section>
            );
          }
          case SECTION_TYPE.PILOT_EXAM_SERVICE: {
            return (
              <Section id={`section-${index}`} key={index} variant={'secondary'}>
                <SectionCost key={index} section={section} />
              </Section>
            );
          }
          case SECTION_TYPE.PILOT_EXAM_DR_PROFILE: {
            return (
              <Section id={`section-${index}`} key={index}>
                <SectionInfo key={index} section={section} />
              </Section>
            );
          }

          /**
           * Contact page
           */
          case SECTION_TYPE.CONTACT_CONTACT: {
            return (
              <Section id={`section-${index}`} key={index} variant={'secondary'} variantLayout={'center'}>
                <SectionContact key={index} section={section} />
              </Section>
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
