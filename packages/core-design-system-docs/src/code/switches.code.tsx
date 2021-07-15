import { Switch, useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const Switches: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Switch value={'on'}></Switch>
      <Switch value={'off'}></Switch>
      <Switch value={'on'} disabled={true}></Switch>
      <Switch value={'off'} disabled={true}></Switch>
    </>
  );
};
