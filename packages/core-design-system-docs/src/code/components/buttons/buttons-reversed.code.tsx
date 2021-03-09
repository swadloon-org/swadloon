import { Variant } from '@newrade/core-design-system';
import { Button, CodeOutline, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const ButtonsReversed: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline style={{ backgroundColor: cssTheme.colors.colors.grey[800] }}>
      <Button variant={Variant.primaryReversed}></Button>
      <Button variant={Variant.secondaryReversed}></Button>
      <Button variant={Variant.tertiaryReversed}></Button>
    </CodeOutline>
  );
};
