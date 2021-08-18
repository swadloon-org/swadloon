import { Placeholder } from '@newrade/core-gatsby-ui/lib/docs-components/placeholder';
import { Cluster, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';
type Props = {};

export const LayoutCluster: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Cluster>
        <Placeholder>1</Placeholder>
        <Cluster gap={[cssTheme.sizing.var.x2]}>
          <Placeholder>1</Placeholder>
          <Placeholder>2</Placeholder>
          <Placeholder>3</Placeholder>
          <Placeholder>4</Placeholder>
        </Cluster>
      </Cluster>
    </>
  );
};
