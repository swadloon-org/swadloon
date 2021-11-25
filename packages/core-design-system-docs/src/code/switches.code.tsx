import React from 'react';

import { Cluster, Switch, useTreatTheme } from '@newrade/core-react-ui';
import { sizingVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const Switches: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Cluster justifyContent={['flex-start']} gap={[sizingVars.var.x4]} wrap={true}>
      <Switch value={'on'}></Switch>
      <Switch value={'off'}></Switch>
      <Switch value={'on'} disabled={true}></Switch>
      <Switch value={'off'} disabled={true}></Switch>
    </Cluster>
  );
};
