import { Variant } from '@newrade/core-design-system';
import { Button, CodeOutline, globalThemeReversed, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const ButtonsReversed: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline style={{ backgroundColor: cssTheme.colors.colors.grey[800] }} className={globalThemeReversed}>
      <Button variant={Variant.primary}></Button>
      <Button variant={Variant.secondary}></Button>
      <Button variant={Variant.tertiary}></Button>
    </CodeOutline>
  );
};
