import React from 'react';

import { Placeholder } from '@newrade/core-gatsby-ui/src/docs-components/placeholder';
import { Cluster } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
type Props = {};

export const LayoutCluster: React.FC<Props> = (props) => {
  return (
    <>
      <Cluster>
        <Placeholder>1</Placeholder>
        <Cluster gap={[sizeVars.x2]}>
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
          <Placeholder>3</Placeholder>
          <Placeholder>4</Placeholder>
        </Cluster>
      </Cluster>
    </>
  );
};
