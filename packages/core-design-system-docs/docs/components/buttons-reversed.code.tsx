import { ButtonVariant } from '@newrade/core-design-system';
import { Button, CodeOutline, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const ButtonsReversed: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline style={{ backgroundColor: cssTheme.colors.colors.grey[800] }}>
      <Button variant={ButtonVariant.primaryReversed}></Button>
      <Button variant={ButtonVariant.secondaryReversed}></Button>
      <Button variant={ButtonVariant.tertiaryReversed}></Button>
    </CodeOutline>
  );
};
