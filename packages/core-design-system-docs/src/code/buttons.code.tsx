import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { Button, Cluster, useTreatTheme } from '@newrade/core-react-ui';
import { sizingVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const Buttons: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Cluster gap={[sizingVars.var.x2]} justifyContent={['flex-start']} wrap={true}>
      <Button variant={Variant.primary}></Button>
      <Button variant={Variant.secondary}></Button>
      <Button variant={Variant.tertiary}></Button>
    </Cluster>
  );
};
