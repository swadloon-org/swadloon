import React from 'react';

import { ButtonIntention, Variant } from '@newrade/core-design-system';
import { Button } from '@newrade/core-react-ui';

type Props = {};

export const ButtonsStates: React.FC<Props> = (props) => {
  return (
    <>
      <Button disabled={true} variant={Variant.primary}>
        Primary
      </Button>
      <Button disabled={true} variant={Variant.secondary}>
        Secondary
      </Button>
      <Button disabled={true} variant={Variant.tertiary}>
        Tertiary
      </Button>
      <Button disabled={true} variant={ButtonIntention.positive}>
        Positive
      </Button>
      <Button disabled={true} variant={ButtonIntention.warning}>
        Warning
      </Button>
      <Button disabled={true} variant={ButtonIntention.danger}>
        Danger
      </Button>
    </>
  );
};
