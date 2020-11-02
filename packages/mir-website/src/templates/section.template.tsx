import React from 'react';
import { ProjectPageProps } from './page.template';

export const SectionTemplate: React.FC<ProjectPageProps> = ({ data }) => {
  return (
    <>
      {data.contentfulPage?.sections.map((section, index) => {
        return <div id={section.id}>{JSON.stringify(section, null, 2)}</div>;

        switch (section.type.id) {
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
          default: {
            return null;
          }
        }
      })}
    </>
  );
};
