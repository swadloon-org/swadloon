import { Icon, ICON_SIZE } from '@newrade/core-design-system';
import { Cluster, IconComp, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {
  size: ICON_SIZE;
};

export const IconSizes: React.FC<Props> = ({ size }) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Cluster wrap={true} gap={[cssTheme.sizing.var.x3]} justifyContent={['flex-start']}>
      <IconComp name={Icon.arrowUp} size={size} />
      <IconComp name={Icon.arrowRight} size={size} />
      <IconComp name={Icon.arrowDown} size={size} />
      <IconComp name={Icon.arrowLeft} size={size} />
    </Cluster>
  );
};
