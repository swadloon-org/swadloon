import { ICON } from '@newrade/core-design-system';
import { Cluster, Icon, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const IconArrows: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Cluster wrap={true} gap={[cssTheme.sizing.var.x2]}>
      <Icon name={ICON.ARROW_UP} />
      <Icon name={ICON.ARROW_RIGHT} />
      <Icon name={ICON.ARROW_DOWN} />
      <Icon name={ICON.ARROW_LEFT} />
    </Cluster>
  );
};
