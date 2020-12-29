import React from 'react';
import { ProjectPageProps } from './page.template';
import { DebugGasbyPage } from '@newrade/core-gatsby-ui';
import { SectionTemplate } from './section.template';

export const HomeTemplate: React.FC<ProjectPageProps> = (props) => {
  return (
    <div>
      <DebugGasbyPage {...props} />
      <SectionTemplate {...props} />
    </div>
  );
};
