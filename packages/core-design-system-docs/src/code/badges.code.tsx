import { Badge, Cluster, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const Badges: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Cluster justifyContent={['flex-start']} gap={[cssTheme.sizing.var.x1]} wrap={true}>
        <Badge name="Neutral" status="Yes"></Badge>
        <Badge name="Success" status="OK" kind={'success'}></Badge>
        <Badge name="Build" status="failed" kind={'error'}></Badge>
      </Cluster>
    </>
  );
};
