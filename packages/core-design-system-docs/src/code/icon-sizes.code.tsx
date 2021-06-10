import { ICON, ICON_SIZE } from '@newrade/core-design-system';
import { Cluster, Icon, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {
  size: ICON_SIZE;
};

export const IconSizes: React.FC<Props> = ({ size }) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Cluster wrap={true} gap={[cssTheme.sizing.var.x3]} justifyContent={['flex-start']}>
      <Icon name={ICON.ARROW_UP} size={size} />
      <Icon name={ICON.ARROW_RIGHT} size={size} />
      <Icon name={ICON.ARROW_DOWN} size={size} />
      <Icon name={ICON.ARROW_LEFT} size={size} />
    </Cluster>
  );
};
