import { ICON, ICON_SIZE } from '@newrade/core-design-system';
import { Cluster, IconComp, useTreatTheme } from '@newrade/core-react-ui';
import React from 'react';

type Props = {};

export const IconSizes: React.FC<Props> = () => {
  const { theme, cssTheme } = useTreatTheme();

  const icons = [ICON.ARROW_UP, ICON.MENU, ICON.ADD];

  return (
    <Cluster
      wrap={true}
      gap={[cssTheme.sizing.var.x5]}
      justifyContent={['flex-start']}
      style={{
        padding: cssTheme.sizing.var.x4,
      }}
    >
      {icons.map((icon) => {
        return (
          <Cluster key={icon} gap={[cssTheme.sizing.var.x5]} justifyContent={['flex-start']}>
            {[ICON_SIZE.large, ICON_SIZE.medium, ICON_SIZE.small].map((size, index) => {
              return <IconComp key={index} name={icon} size={size} />;
            })}
          </Cluster>
        );
      })}
    </Cluster>
  );
};
