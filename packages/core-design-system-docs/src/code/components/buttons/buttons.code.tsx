import { Variant } from '@newrade/core-design-system';
import { Button, CodeOutline, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const Buttons: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <Button variant={Variant.primary}></Button>
      <Button variant={Variant.secondary}></Button>
      <Button variant={Variant.tertiary}></Button>
    </CodeOutline>
  );
};
