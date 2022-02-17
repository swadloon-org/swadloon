import React from 'react';

import { ICON, ICON_SIZE } from '@newrade/core-design-system';
import { Cluster, IconComp } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';

type Props = {};

export const IconSizes: React.FC<Props> = () => {
  const icons = [ICON.ARROW_UP, ICON.MENU, ICON.ADD];

  return (
    <Cluster
      wrap={true}
      gap={[sizeVars.x5]}
      justifyContent={['flex-start']}
      style={{
        padding: sizeVars.x4,
      }}
    >
      {icons.map((icon) => {
        return (
          <Cluster key={icon} gap={[sizeVars.x5]} justifyContent={['flex-start']}>
            {[ICON_SIZE.large, ICON_SIZE.medium, ICON_SIZE.small].map((size, index) => {
              return <IconComp key={index} name={icon} size={size} />;
            })}
          </Cluster>
        );
      })}
    </Cluster>
  );
};
