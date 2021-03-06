import React from 'react';

import { Cluster, Switch } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const Switches: React.FC<Props> = (props) => {
  return (
    <Cluster justifyContent={['flex-start']} gap={[sizeVars.x4]} wrap={true}>
      <Switch value={'on'}></Switch>
      <Switch value={'off'}></Switch>
      <Switch value={'on'} disabled={true}></Switch>
      <Switch value={'off'} disabled={true}></Switch>
    </Cluster>
  );
};
