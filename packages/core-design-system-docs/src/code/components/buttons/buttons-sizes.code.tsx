import { ButtonSize } from '@newrade/core-design-system';
import { Button, CodeOutline, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const ButtonsSizes: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <CodeOutline>
      <Button size={ButtonSize.large}></Button>
      <Button size={ButtonSize.medium}></Button>
      <Button size={ButtonSize.small}></Button>
      <Button size={ButtonSize.xsmall}></Button>
    </CodeOutline>
  );
};
