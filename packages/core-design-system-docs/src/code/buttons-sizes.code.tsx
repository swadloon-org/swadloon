import React from 'react';

import { ButtonSize } from '@newrade/core-design-system';
import { Button } from '@newrade/core-react-ui';

type Props = {};

export const ButtonsSizes: React.FC<Props> = (props) => {
  return (
    <>
      <Button size={ButtonSize.large}></Button>
      <Button size={ButtonSize.medium}></Button>
      <Button size={ButtonSize.small}></Button>
      <Button size={ButtonSize.xSmall}></Button>
    </>
  );
};
