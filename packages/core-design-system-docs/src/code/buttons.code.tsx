import React from 'react';

import { ButtonIntention, Variant } from '@newrade/core-design-system';
import { Button, Cluster } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const Buttons: React.FC<Props> = (props) => {
  return (
    <Cluster gap={[sizeVars.x2]} justifyContent={['flex-start']} wrap={true}>
      <Button variant={Variant.primary}>Primary</Button>
      <Button variant={Variant.secondary}>Secondary</Button>
      <Button variant={Variant.tertiary}>Tertiary</Button>
      <Button variant={ButtonIntention.positive}>Positive</Button>
      <Button variant={ButtonIntention.warning}>Warning</Button>
      <Button variant={ButtonIntention.danger}>Danger</Button>
    </Cluster>
  );
};
