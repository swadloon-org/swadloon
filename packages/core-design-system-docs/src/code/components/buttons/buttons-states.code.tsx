import { Variant } from '@newrade/core-design-system';
import { Button, CodeOutline, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const ButtonsStates: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <Button disabled={true} variant={Variant.primary}></Button>
      <Button disabled={true} variant={Variant.secondary}></Button>
      <Button disabled={true} variant={Variant.tertiary}></Button>
    </CodeOutline>
  );
};
