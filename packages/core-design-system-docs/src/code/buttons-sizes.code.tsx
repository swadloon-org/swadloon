import { ButtonSize } from '@newrade/core-design-system';
import { Button, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const ButtonsSizes: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Button size={ButtonSize.large}></Button>
      <Button size={ButtonSize.medium}></Button>
      <Button size={ButtonSize.small}></Button>
      <Button size={ButtonSize.xSmall}></Button>
    </>
  );
};
