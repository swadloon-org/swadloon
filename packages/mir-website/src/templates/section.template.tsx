import React from 'react';
import { ProjectPageProps } from './page.template';
import { InfoSectionType1Group } from '../components/info-section/info-section-type-1-group';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { InfoSectionType5 } from '../components/info-section/info-section-type-5';
import { InfoSectionType6Group } from '../components/info-section/info-section-type-6-group';
import { InfoSectionVideo } from '../components/info-section/info-section-video';

export enum SECTION_TYPE {
  TYPE_1_GROUP = 'TYPE_1_GROUP',
  TYPE_1_NORMAL = 'TYPE_1_NORMAL',
  TYPE_1_REVERSED = 'TYPE_1_REVERSED',
  TYPE_2 = 'TYPE_2',
  TYPE_3_GROUP = 'TYPE_3_GROUP',
  TYPE_3 = 'TYPE_3',
  TYPE_4_PRIMARY = 'TYPE_4_PRIMARY',
  TYPE_4_SECONDARY = 'TYPE_4_SECONDARY',
  TYPE_5 = 'TYPE_5',
  TYPE_6_GROUP = 'TYPE_6_GROUP',
  TYPE_6_PRIMARY = 'TYPE_6_PRIMARY',
  TYPE_6_SECONDARY = 'TYPE_6_SECONDARY',
  TYPE_6_TERTIARY = 'TYPE_6_TERTIARY',
  VIDEO = 'VIDEO',
  BLOG_PREVIEW = 'BLOG_PREVIEW',
  JOB_EMPLOYER = 'JOB_EMPLOYER',
  JOB_CANDIDATES = 'JOB_CANDIDATES',
  PROCESS_PRIMARY = 'PROCESS_PRIMARY',
  PROCESS_SECONDARY = 'PROCESS_SECONDARY',
  TESTIMONIAL = 'TESTIMONIAL',
  NEWSLETTER_PRIMARY = 'NEWSLETTER_PRIMARY',
  NEWSLETTER_SECONDARY = 'NEWSLETTER_SECONDARY',
  ACTION_PRIMARY = 'ACTION_PRIMARY',
  ACTION_SECONDARY = 'ACTION_SECONDARY',
}

export enum SECTION_IMAGE_POSITION {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
}

export enum LINK_TYPE {
  INTERNAL_PAGE = 'INTERNAL_PAGE',
  EXTERNAL_URL = 'EXTERNAL_URL',
}

export const SectionTemplate: React.FC<ProjectPageProps> = ({ data }) => {
  return (
    <>
      {data.contentfulPage?.sections?.map((section, index) => {
        switch (section.type.name) {
          case SECTION_TYPE.TYPE_1_GROUP: {
            return <InfoSectionType1Group key={index} {...section} />;
          }
          case SECTION_TYPE.TYPE_2: {
            return <InfoSectionType2 key={index} {...section} />;
          }
          // case 'type1group': {
          //   return <InfoSectionType1Group key={index} {...section} />;
          // }
          // case 'type2': {
          //   return <InfoSectionType2 key={index} align="AlignContentLeft" {...section} />;
          // }
          // case 'type3': {
          //   return <InfoSectionType3 key={index} align="AlignContentRight" {...section} />;
          // }
          // case 'type4': {
          //   return <InfoSectionType4 key={index} {...section} />;
          // }
          case SECTION_TYPE.TYPE_5: {
            return <InfoSectionType5 key={index} {...section} />;
          }
          case SECTION_TYPE.TYPE_6_GROUP: {
            return <InfoSectionType6Group key={index} {...section} />;
          }
          case SECTION_TYPE.VIDEO: {
            return <InfoSectionVideo key={index} {...section} />;
          }
          default: {
            return null;
          }
        }
      })}
    </>
  );
};
