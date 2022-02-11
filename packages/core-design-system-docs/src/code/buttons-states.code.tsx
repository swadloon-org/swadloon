import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { Button } from '@newrade/core-react-ui';

type Props = {};

export const ButtonsStates: React.FC<Props> = (props) => {
  return (
    <>
      <Button disabled={true} variant={Variant.primary}></Button>
      <Button disabled={true} variant={Variant.secondary}></Button>
      <Button disabled={true} variant={Variant.tertiary}></Button>
    </>
  );
};
