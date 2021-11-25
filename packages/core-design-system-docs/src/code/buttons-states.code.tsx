import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { Button, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const ButtonsStates: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Button disabled={true} variant={Variant.primary}></Button>
      <Button disabled={true} variant={Variant.secondary}></Button>
      <Button disabled={true} variant={Variant.tertiary}></Button>
    </>
  );
};
