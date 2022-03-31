import React from 'react';

import { ButtonIntention, Variant } from '@newrade/core-design-system';
import { Button, Cluster } from '@newrade/core-react-ui';
import { Code } from '@newrade/core-react-ui/code';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const ButtonsAs: React.FC<Props> = (props) => {
  return (
    <Cluster gap={[sizeVars.x2]} justifyContent={['flex-start']} wrap={true}>
      <Button variant={Variant.primary} as="a" href={'/'}>
        Button as Link
      </Button>

      <Button variant={Variant.secondary} as="div">
        Button as Div
      </Button>
    </Cluster>
  );
};
