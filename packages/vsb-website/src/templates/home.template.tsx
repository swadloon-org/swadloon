import React from 'react';
import { ProjectPageProps } from './page.template';
import { SectionTemplate } from './section.template';

export const HomeTemplate: React.FC<ProjectPageProps> = (props) => {
  return <SectionTemplate {...props} />;
};
