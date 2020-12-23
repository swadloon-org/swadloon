import React from 'react';
import { ProjectPageProps } from './page.template';
import { DebugGasbyPage } from '@newrade/core-gatsby-ui';

export const HomeTemplate: React.FC<ProjectPageProps> = (props) => {
  return (
    <div>
      <DebugGasbyPage {...props} />
    </div>
  );
};
