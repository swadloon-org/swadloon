import React from 'react';

import { Badge, Cluster } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const Badges: React.FC<Props> = (props) => {
  return (
    <>
      <Cluster justifyContent={['flex-start']} gap={[sizeVars.x1]} wrap={true}>
        <Badge name="Neutral" status="Yes"></Badge>
        <Badge name="Success" status="OK" kind={'success'}></Badge>
        <Badge name="Build" status="failed" kind={'error'}></Badge>
      </Cluster>
    </>
  );
};
