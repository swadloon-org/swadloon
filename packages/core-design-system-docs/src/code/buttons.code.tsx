import { Variant } from '@newrade/core-design-system';
import { Button, useTreatTheme } from '@newrade/core-react-ui/src';
import React from 'react';

type Props = {};

export const Buttons: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Button variant={Variant.primary}></Button>
      <Button variant={Variant.secondary}></Button>
      <Button variant={Variant.tertiary}></Button>
    </>
  );
};
