import { ICON, ICON_SIZE } from '@newrade/core-design-system';
import { Cluster, IconComp, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {
  size: ICON_SIZE;
};

export const IconSizes: React.FC<Props> = ({ size }) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Cluster wrap={true} gap={[cssTheme.sizing.var.x3]} justifyContent={['flex-start']}>
      <IconComp name={ICON.IO_ARROW_UP} size={size} />
      <IconComp name={ICON.IO_ARROW_RIGHT} size={size} />
      <IconComp name={ICON.IO_ARROW_DOWN} size={size} />
      <IconComp name={ICON.IO_ARROW_LEFT} size={size} />
    </Cluster>
  );
};
